from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetUserContentByDateJSONQueryParams:
    date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserContentByDateJSONSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetUserContentByDateJSONRequest:
    query_params: GetUserContentByDateJSONQueryParams = field(default=None)
    security: GetUserContentByDateJSONSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetUserContentByDateJSON200ApplicationJSONDebug:
    version: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass_json
@dataclass
class GetUserContentByDateJSON200ApplicationJSONResultsComments:
    approve_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approveDate' }})
    asset_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetID' }})
    asset_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetURL' }})
    comment_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commentBody' }})
    comment_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commentID' }})
    comment_sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commentSequence' }})
    comment_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commentTitle' }})
    comment_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commentType' }})
    create_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createDate' }})
    editors_selection: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'editorsSelection' }})
    lft: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lft' }})
    parent_id: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentID' }})
    recommendation_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendationCount' }})
    replies: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replies' }})
    reply_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replyCount' }})
    rgt: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rgt' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusID' }})
    update_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateDate' }})
    user_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userDisplayName' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userID' }})
    user_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userLocation' }})
    user_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userTitle' }})
    user_url: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userURL' }})
    

@dataclass_json
@dataclass
class GetUserContentByDateJSON200ApplicationJSONResults:
    api_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_timestamp' }})
    comments: Optional[List[GetUserContentByDateJSON200ApplicationJSONResultsComments]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    total_comments_found: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCommentsFound' }})
    total_comments_returned: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCommentsReturned' }})
    

@dataclass_json
@dataclass
class GetUserContentByDateJSON200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyright' }})
    debug: Optional[GetUserContentByDateJSON200ApplicationJSONDebug] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debug' }})
    results: Optional[GetUserContentByDateJSON200ApplicationJSONResults] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class GetUserContentByDateJSONResponse:
    content_type: str = field(default=None)
    get_user_content_by_date_json_200_application_json_object: Optional[GetUserContentByDateJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
