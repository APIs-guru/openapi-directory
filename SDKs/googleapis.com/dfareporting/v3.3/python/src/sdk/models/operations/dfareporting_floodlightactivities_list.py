from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DfareportingFloodlightActivitiesListPathParams:
    profile_id: str = field(metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    
class DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum(str, Enum):
    COUNTER = "COUNTER"
    SALE = "SALE"

class DfareportingFloodlightActivitiesListSortFieldEnum(str, Enum):
    ID = "ID"
    NAME = "NAME"

class DfareportingFloodlightActivitiesListSortOrderEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass
class DfareportingFloodlightActivitiesListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    advertiser_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'advertiserId', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    floodlight_activity_group_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'floodlightActivityGroupIds', 'style': 'form', 'explode': True }})
    floodlight_activity_group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'floodlightActivityGroupName', 'style': 'form', 'explode': True }})
    floodlight_activity_group_tag_string: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'floodlightActivityGroupTagString', 'style': 'form', 'explode': True }})
    floodlight_activity_group_type: Optional[DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'floodlightActivityGroupType', 'style': 'form', 'explode': True }})
    floodlight_configuration_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'floodlightConfigurationId', 'style': 'form', 'explode': True }})
    ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    search_string: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchString', 'style': 'form', 'explode': True }})
    sort_field: Optional[DfareportingFloodlightActivitiesListSortFieldEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortField', 'style': 'form', 'explode': True }})
    sort_order: Optional[DfareportingFloodlightActivitiesListSortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    tag_string: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tagString', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class DfareportingFloodlightActivitiesListSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DfareportingFloodlightActivitiesListRequest:
    path_params: DfareportingFloodlightActivitiesListPathParams = field()
    query_params: DfareportingFloodlightActivitiesListQueryParams = field()
    security: DfareportingFloodlightActivitiesListSecurity = field()
    

@dataclass
class DfareportingFloodlightActivitiesListResponse:
    content_type: str = field()
    status_code: int = field()
    floodlight_activities_list_response: Optional[shared.FloodlightActivitiesListResponse] = field(default=None)
    
