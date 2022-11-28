from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetUserContentURLJSONQueryParams:
    url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserContentURLJSONSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass_json
@dataclass
class GetUserContentURLJSON200ApplicationJSONDebug:
    version: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclass
class GetUserContentURLJSON200ApplicationJSONResultsComments:
    approve_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approveDate') }})
    comment_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentBody') }})
    comment_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentID') }})
    comment_sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentSequence') }})
    comment_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentTitle') }})
    comment_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentType') }})
    create_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDate') }})
    depth: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('depth') }})
    editors_selection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('editorsSelection') }})
    parent_id: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentID') }})
    parent_user_display_name: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentUserDisplayName') }})
    perm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permID') }})
    pic_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('picURL') }})
    recommendations: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendations') }})
    recommended_flag: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendedFlag') }})
    replies: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replies') }})
    reply_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replyCount') }})
    report_abuse_flag: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportAbuseFlag') }})
    sharing: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharing') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    timespeople: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timespeople') }})
    trusted: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trusted') }})
    update_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateDate') }})
    user_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userDisplayName') }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userID') }})
    user_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLocation') }})
    user_title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userTitle') }})
    user_url: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userURL') }})
    

@dataclass_json
@dataclass
class GetUserContentURLJSON200ApplicationJSONResults:
    api_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_timestamp') }})
    caller_id: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callerID') }})
    comments: Optional[List[GetUserContentURLJSON200ApplicationJSONResultsComments]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    depth_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('depthLimit') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    reply_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replyLimit') }})
    sort: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort') }})
    total_comments_found: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCommentsFound') }})
    total_comments_returned: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCommentsReturned') }})
    total_editors_selection_found: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalEditorsSelectionFound') }})
    total_editors_selection_returned: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalEditorsSelectionReturned') }})
    total_parent_comments_found: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalParentCommentsFound') }})
    total_parent_comments_returned: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalParentCommentsReturned') }})
    total_recommendations_found: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalRecommendationsFound') }})
    total_recommendations_returned: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalRecommendationsReturned') }})
    total_reply_comments_found: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalReplyCommentsFound') }})
    total_reply_comments_returned: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalReplyCommentsReturned') }})
    total_reporter_reply_comments_found: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalReporterReplyCommentsFound') }})
    total_reporter_reply_comments_returned: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalReporterReplyCommentsReturned') }})
    

@dataclass_json
@dataclass
class GetUserContentURLJSON200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    debug: Optional[GetUserContentURLJSON200ApplicationJSONDebug] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debug') }})
    results: Optional[GetUserContentURLJSON200ApplicationJSONResults] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class GetUserContentURLJSONRequest:
    query_params: GetUserContentURLJSONQueryParams = field()
    security: GetUserContentURLJSONSecurity = field()
    

@dataclass
class GetUserContentURLJSONResponse:
    content_type: str = field()
    status_code: int = field()
    get_user_content_url_json_200_application_json_object: Optional[GetUserContentURLJSON200ApplicationJSON] = field(default=None)
    
