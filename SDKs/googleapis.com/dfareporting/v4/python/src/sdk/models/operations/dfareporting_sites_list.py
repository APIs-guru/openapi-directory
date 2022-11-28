from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DfareportingSitesListPathParams:
    profile_id: str = field(metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    
class DfareportingSitesListSortFieldEnum(str, Enum):
    ID = "ID"
    NAME = "NAME"

class DfareportingSitesListSortOrderEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass
class DfareportingSitesListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    accepts_in_stream_video_placements: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'acceptsInStreamVideoPlacements', 'style': 'form', 'explode': True }})
    accepts_interstitial_placements: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'acceptsInterstitialPlacements', 'style': 'form', 'explode': True }})
    accepts_publisher_paid_placements: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'acceptsPublisherPaidPlacements', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    ad_words_site: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'adWordsSite', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    approved: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'approved', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    campaign_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'campaignIds', 'style': 'form', 'explode': True }})
    directory_site_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'directorySiteIds', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    search_string: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchString', 'style': 'form', 'explode': True }})
    sort_field: Optional[DfareportingSitesListSortFieldEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortField', 'style': 'form', 'explode': True }})
    sort_order: Optional[DfareportingSitesListSortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    subaccount_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'subaccountId', 'style': 'form', 'explode': True }})
    unmapped_site: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'unmappedSite', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class DfareportingSitesListSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DfareportingSitesListRequest:
    path_params: DfareportingSitesListPathParams = field()
    query_params: DfareportingSitesListQueryParams = field()
    security: DfareportingSitesListSecurity = field()
    

@dataclass
class DfareportingSitesListResponse:
    content_type: str = field()
    status_code: int = field()
    sites_list_response: Optional[shared.SitesListResponse] = field(default=None)
    
