from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetUserContentUserJSONQueryParams:
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'userID', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserContentUserJSONSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetUserContentUserJSONRequest:
    query_params: GetUserContentUserJSONQueryParams = field(default=None)
    security: GetUserContentUserJSONSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetUserContentUserJSON200ApplicationJSONDebug:
    version: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass_json
@dataclass
class GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetAllProperties:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    properties: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    

@dataclass_json
@dataclass
class GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetLabels:
    label_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelID' }})
    label_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelName' }})
    

@dataclass_json
@dataclass
class GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetPropertiesAutomoderationOff:
    group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupID' }})
    taxonomy_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxonomyID' }})
    

@dataclass_json
@dataclass
class GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetPropertiesCommentListSortApprovedateDesc:
    group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupID' }})
    taxonomy_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxonomyID' }})
    

@dataclass_json
@dataclass
class GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetPropertiesReachedMaxComOn:
    group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupID' }})
    taxonomy_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxonomyID' }})
    

@dataclass_json
@dataclass
class GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetProperties:
    automoderation_off: Optional[GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetPropertiesAutomoderationOff] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automoderation-off' }})
    comment_list_sort_approvedate_desc: Optional[GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetPropertiesCommentListSortApprovedateDesc] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment-list-sort-approvedate-desc' }})
    reached_max_com_on: Optional[GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetPropertiesReachedMaxComOn] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reached-max-com-on' }})
    

@dataclass_json
@dataclass
class GetUserContentUserJSON200ApplicationJSONResultsCommentsAsset:
    all_properties: Optional[List[GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetAllProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'all-properties' }})
    asset_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetID' }})
    asset_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetTitle' }})
    asset_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetURL' }})
    create_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createDate' }})
    labels: Optional[List[GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetLabels]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    properties: Optional[GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    taxonomy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxonomy' }})
    text: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    update_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateDate' }})
    vendor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vendorID' }})
    

@dataclass_json
@dataclass
class GetUserContentUserJSON200ApplicationJSONResultsComments:
    approve_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approveDate' }})
    asset: Optional[GetUserContentUserJSON200ApplicationJSONResultsCommentsAsset] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset' }})
    comment_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commentBody' }})
    comment_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commentID' }})
    comment_sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commentSequence' }})
    comment_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commentTitle' }})
    comment_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commentType' }})
    create_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createDate' }})
    editors_selection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'editorsSelection' }})
    labels: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    parent_id: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentID' }})
    permid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permid' }})
    pic_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'picURL' }})
    recommendations: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendations' }})
    replies: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replies' }})
    reply_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replyCount' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    update_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateDate' }})
    user_display_name: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userDisplayName' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userID' }})
    user_location: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userLocation' }})
    user_submitted_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userSubmittedDisplayName' }})
    user_submitted_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userSubmittedLocation' }})
    user_submitted_title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userSubmittedTitle' }})
    user_submitted_url: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userSubmittedURL' }})
    user_title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userTitle' }})
    user_url: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userURL' }})
    

@dataclass_json
@dataclass
class GetUserContentUserJSON200ApplicationJSONResults:
    api_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_timestamp' }})
    comments: Optional[List[GetUserContentUserJSON200ApplicationJSONResultsComments]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    total_comments_found: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCommentsFound' }})
    total_comments_returned: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCommentsReturned' }})
    

@dataclass_json
@dataclass
class GetUserContentUserJSON200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyright' }})
    debug: Optional[GetUserContentUserJSON200ApplicationJSONDebug] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debug' }})
    results: Optional[GetUserContentUserJSON200ApplicationJSONResults] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class GetUserContentUserJSONResponse:
    content_type: str = field(default=None)
    get_user_content_user_json_200_application_json_object: Optional[GetUserContentUserJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
