from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DfareportingPlacementsListPathParams:
    profile_id: str = field(metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    
class DfareportingPlacementsListCompatibilitiesEnum(str, Enum):
    DISPLAY = "DISPLAY"
    DISPLAY_INTERSTITIAL = "DISPLAY_INTERSTITIAL"
    APP = "APP"
    APP_INTERSTITIAL = "APP_INTERSTITIAL"
    IN_STREAM_VIDEO = "IN_STREAM_VIDEO"
    IN_STREAM_AUDIO = "IN_STREAM_AUDIO"

class DfareportingPlacementsListPaymentSourceEnum(str, Enum):
    PLACEMENT_AGENCY_PAID = "PLACEMENT_AGENCY_PAID"
    PLACEMENT_PUBLISHER_PAID = "PLACEMENT_PUBLISHER_PAID"

class DfareportingPlacementsListPricingTypesEnum(str, Enum):
    PRICING_TYPE_CPM = "PRICING_TYPE_CPM"
    PRICING_TYPE_CPC = "PRICING_TYPE_CPC"
    PRICING_TYPE_CPA = "PRICING_TYPE_CPA"
    PRICING_TYPE_FLAT_RATE_IMPRESSIONS = "PRICING_TYPE_FLAT_RATE_IMPRESSIONS"
    PRICING_TYPE_FLAT_RATE_CLICKS = "PRICING_TYPE_FLAT_RATE_CLICKS"
    PRICING_TYPE_CPM_ACTIVEVIEW = "PRICING_TYPE_CPM_ACTIVEVIEW"

class DfareportingPlacementsListSortFieldEnum(str, Enum):
    ID = "ID"
    NAME = "NAME"

class DfareportingPlacementsListSortOrderEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass
class DfareportingPlacementsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    advertiser_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'advertiserIds', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    archived: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'archived', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    campaign_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'campaignIds', 'style': 'form', 'explode': True }})
    compatibilities: Optional[List[DfareportingPlacementsListCompatibilitiesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'compatibilities', 'style': 'form', 'explode': True }})
    content_category_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'contentCategoryIds', 'style': 'form', 'explode': True }})
    directory_site_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'directorySiteIds', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    group_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'groupIds', 'style': 'form', 'explode': True }})
    ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxEndDate', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    max_start_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxStartDate', 'style': 'form', 'explode': True }})
    min_end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'minEndDate', 'style': 'form', 'explode': True }})
    min_start_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'minStartDate', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    payment_source: Optional[DfareportingPlacementsListPaymentSourceEnum] = field(default=None, metadata={'query_param': { 'field_name': 'paymentSource', 'style': 'form', 'explode': True }})
    placement_strategy_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'placementStrategyIds', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    pricing_types: Optional[List[DfareportingPlacementsListPricingTypesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'pricingTypes', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    search_string: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchString', 'style': 'form', 'explode': True }})
    site_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'siteIds', 'style': 'form', 'explode': True }})
    size_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'sizeIds', 'style': 'form', 'explode': True }})
    sort_field: Optional[DfareportingPlacementsListSortFieldEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortField', 'style': 'form', 'explode': True }})
    sort_order: Optional[DfareportingPlacementsListSortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class DfareportingPlacementsListSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DfareportingPlacementsListRequest:
    path_params: DfareportingPlacementsListPathParams = field()
    query_params: DfareportingPlacementsListQueryParams = field()
    security: DfareportingPlacementsListSecurity = field()
    

@dataclass
class DfareportingPlacementsListResponse:
    content_type: str = field()
    status_code: int = field()
    placements_list_response: Optional[shared.PlacementsListResponse] = field(default=None)
    
