from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetUserContentRecentJSONSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass_json
@dataclass
class GetUserContentRecentJSON200ApplicationJSONDebug:
    version: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclass
class GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetAllProperties:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    properties: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    

@dataclass_json
@dataclass
class GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetPropertiesAutomoderationOn:
    group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupID') }})
    taxonomy_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxonomyID') }})
    

@dataclass_json
@dataclass
class GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetPropertiesCommentListSortEditors:
    group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupID') }})
    taxonomy_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxonomyID') }})
    

@dataclass_json
@dataclass
class GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetPropertiesReachedMaxComOff:
    group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupID') }})
    taxonomy_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxonomyID') }})
    

@dataclass_json
@dataclass
class GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetProperties:
    automoderation_on: Optional[GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetPropertiesAutomoderationOn] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automoderation-on') }})
    comment_list_sort_editors: Optional[GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetPropertiesCommentListSortEditors] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment-list-sort-editors') }})
    reached_max_com_off: Optional[GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetPropertiesReachedMaxComOff] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reached-max-com-off') }})
    

@dataclass_json
@dataclass
class GetUserContentRecentJSON200ApplicationJSONResultsCommentsAsset:
    all_properties: Optional[List[GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetAllProperties]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('all-properties') }})
    asset_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetID') }})
    asset_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetTitle') }})
    asset_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetURL') }})
    create_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDate') }})
    labels: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    properties: Optional[GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    taxonomy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxonomy') }})
    text: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    update_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateDate') }})
    vendor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendorID') }})
    

@dataclass_json
@dataclass
class GetUserContentRecentJSON200ApplicationJSONResultsComments:
    approve_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approveDate') }})
    asset: Optional[GetUserContentRecentJSON200ApplicationJSONResultsCommentsAsset] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset') }})
    asset_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetID') }})
    comment_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentBody') }})
    comment_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentID') }})
    comment_sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentSequence') }})
    comment_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentTitle') }})
    comment_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentType') }})
    create_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDate') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    editors_selection: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('editorsSelection') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    parent_id: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentID') }})
    recommendation_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationCount') }})
    replies: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replies') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusID') }})
    update_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateDate') }})
    user_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userDisplayName') }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userID') }})
    user_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLocation') }})
    user_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userTitle') }})
    user_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userURL') }})
    

@dataclass_json
@dataclass
class GetUserContentRecentJSON200ApplicationJSONResults:
    api_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_timestamp') }})
    comments: Optional[List[GetUserContentRecentJSON200ApplicationJSONResultsComments]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    total_comments_returned: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCommentsReturned') }})
    

@dataclass_json
@dataclass
class GetUserContentRecentJSON200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    debug: Optional[GetUserContentRecentJSON200ApplicationJSONDebug] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debug') }})
    results: Optional[GetUserContentRecentJSON200ApplicationJSONResults] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class GetUserContentRecentJSONRequest:
    security: GetUserContentRecentJSONSecurity = field()
    

@dataclass
class GetUserContentRecentJSONResponse:
    content_type: str = field()
    status_code: int = field()
    get_user_content_recent_json_200_application_json_object: Optional[GetUserContentRecentJSON200ApplicationJSON] = field(default=None)
    
