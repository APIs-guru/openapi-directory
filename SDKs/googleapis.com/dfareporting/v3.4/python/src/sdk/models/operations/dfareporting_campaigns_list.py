from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DfareportingCampaignsListPathParams:
    profile_id: str = field(metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    
class DfareportingCampaignsListSortFieldEnum(str, Enum):
    ID = "ID"
    NAME = "NAME"

class DfareportingCampaignsListSortOrderEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass
class DfareportingCampaignsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    advertiser_group_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'advertiserGroupIds', 'style': 'form', 'explode': True }})
    advertiser_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'advertiserIds', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    archived: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'archived', 'style': 'form', 'explode': True }})
    at_least_one_optimization_activity: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'atLeastOneOptimizationActivity', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    excluded_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'excludedIds', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    overridden_event_tag_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'overriddenEventTagId', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    search_string: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchString', 'style': 'form', 'explode': True }})
    sort_field: Optional[DfareportingCampaignsListSortFieldEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortField', 'style': 'form', 'explode': True }})
    sort_order: Optional[DfareportingCampaignsListSortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    subaccount_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'subaccountId', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class DfareportingCampaignsListSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DfareportingCampaignsListRequest:
    path_params: DfareportingCampaignsListPathParams = field()
    query_params: DfareportingCampaignsListQueryParams = field()
    security: DfareportingCampaignsListSecurity = field()
    

@dataclass
class DfareportingCampaignsListResponse:
    content_type: str = field()
    status_code: int = field()
    campaigns_list_response: Optional[shared.CampaignsListResponse] = field(default=None)
    
