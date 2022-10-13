from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class GetWorkspaceIDMembersPathParams:
    workspace_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    
class GetWorkspaceIDMembersActivityTypeEnum(str, Enum):
    DISCORD_MESSAGE_SENT = "discord:message:sent"
    SLACK_THREAD_REPLIED = "slack:thread:replied"
    DISCORD_MESSAGE_REPLIED = "discord:message:replied"
    TWEET_SENT = "tweet:sent"
    TWITTER_FOLLOWED = "twitter:followed"
    DISCORD_SERVER_JOINED = "discord:server:joined"
    DISCOURSE_TOPIC_CREATED = "discourse:topic:created"
    DISCOURSE_POST_CREATED = "discourse:post:created"
    SLACK_MESSAGE_SENT = "slack:message:sent"
    NOTE_CREATED = "note:created"
    POST_CREATED = "post:created"
    ISSUES_OPENED = "issues:opened"
    ISSUE_COMMENT_CREATED = "issue_comment:created"
    PULL_REQUESTS_OPENED = "pull_requests:opened"
    PULL_REQUESTS_MERGED = "pull_requests:merged"
    CUSTOM_HAPPENED = "custom:happened"
    SLACK_CHANNEL_JOINED = "slack:channel:joined"
    STAR_CREATED = "star:created"

class GetWorkspaceIDMembersAffiliationEnum(str, Enum):
    MEMBER = "member"
    TEAMMATE = "teammate"

class GetWorkspaceIDMembersDirectionEnum(str, Enum):
    ASC = "ASC"
    DESC = "DESC"

class GetWorkspaceIDMembersIdentityEnum(str, Enum):
    GITHUB = "github"
    TWITTER = "twitter"
    EMAIL = "email"
    DISCOURSE = "discourse"
    LINKEDIN = "linkedin"
    DEVTO = "devto"
    SLACK = "slack"
    DISCORD = "discord"

class GetWorkspaceIDMembersItemsEnum(str, Enum):
    TEN = "10"
    FIFTY = "50"
    ONE_HUNDRED = "100"

class GetWorkspaceIDMembersOrbitLevelEnum(str, Enum):
    ONE = "1"
    TWO = "2"
    THREE = "3"
    FOUR = "4"
    N = "n"

class GetWorkspaceIDMembersSortEnum(str, Enum):
    ACTIVITIES_COUNT = "activities_count"
    COMPANY = "company"
    CREATED_AT = "created_at"
    FIRST_ACTIVITY = "first_activity"
    GITHUB_FOLLOWERS = "github_followers"
    ID = "id"
    LAST_ACTIVITY = "last_activity"
    LOCATION = "location"
    LOVE = "love"
    NAME = "name"
    ORBIT = "orbit"
    REACH = "reach"
    TITLE = "title"
    TWITTER_FOLLOWERS = "twitter_followers"
    UPDATED_AT = "updated_at"


@dataclass
class GetWorkspaceIDMembersQueryParams:
    activities_count_max: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'activities_count_max', 'style': 'form', 'explode': True }})
    activities_count_min: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'activities_count_min', 'style': 'form', 'explode': True }})
    activity_tags: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'activity_tags', 'style': 'form', 'explode': True }})
    activity_type: Optional[GetWorkspaceIDMembersActivityTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'activity_type', 'style': 'form', 'explode': True }})
    affiliation: Optional[GetWorkspaceIDMembersAffiliationEnum] = field(default=None, metadata={'query_param': { 'field_name': 'affiliation', 'style': 'form', 'explode': True }})
    company: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'company', 'style': 'form', 'explode': True }})
    direction: Optional[GetWorkspaceIDMembersDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    identity: Optional[GetWorkspaceIDMembersIdentityEnum] = field(default=None, metadata={'query_param': { 'field_name': 'identity', 'style': 'form', 'explode': True }})
    items: Optional[GetWorkspaceIDMembersItemsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'items', 'style': 'form', 'explode': True }})
    location: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'location', 'style': 'form', 'explode': True }})
    member_tags: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'member_tags', 'style': 'form', 'explode': True }})
    orbit_level: Optional[GetWorkspaceIDMembersOrbitLevelEnum] = field(default=None, metadata={'query_param': { 'field_name': 'orbit_level', 'style': 'form', 'explode': True }})
    page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[GetWorkspaceIDMembersSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    weight: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'weight', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWorkspaceIDMembersSecurity:
    bearer: shared.SchemeBearer = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetWorkspaceIDMembersRequest:
    path_params: GetWorkspaceIDMembersPathParams = field(default=None)
    query_params: GetWorkspaceIDMembersQueryParams = field(default=None)
    security: GetWorkspaceIDMembersSecurity = field(default=None)
    

@dataclass
class GetWorkspaceIDMembersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
