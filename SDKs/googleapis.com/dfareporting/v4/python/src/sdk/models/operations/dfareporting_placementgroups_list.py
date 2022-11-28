from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DfareportingPlacementGroupsListPathParams:
    profile_id: str = field(metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    
class DfareportingPlacementGroupsListActiveStatusEnum(str, Enum):
    PLACEMENT_STATUS_UNKNOWN = "PLACEMENT_STATUS_UNKNOWN"
    PLACEMENT_STATUS_ACTIVE = "PLACEMENT_STATUS_ACTIVE"
    PLACEMENT_STATUS_INACTIVE = "PLACEMENT_STATUS_INACTIVE"
    PLACEMENT_STATUS_ARCHIVED = "PLACEMENT_STATUS_ARCHIVED"
    PLACEMENT_STATUS_PERMANENTLY_ARCHIVED = "PLACEMENT_STATUS_PERMANENTLY_ARCHIVED"

class DfareportingPlacementGroupsListPlacementGroupTypeEnum(str, Enum):
    PLACEMENT_PACKAGE = "PLACEMENT_PACKAGE"
    PLACEMENT_ROADBLOCK = "PLACEMENT_ROADBLOCK"

class DfareportingPlacementGroupsListPricingTypesEnum(str, Enum):
    PRICING_TYPE_CPM = "PRICING_TYPE_CPM"
    PRICING_TYPE_CPC = "PRICING_TYPE_CPC"
    PRICING_TYPE_CPA = "PRICING_TYPE_CPA"
    PRICING_TYPE_FLAT_RATE_IMPRESSIONS = "PRICING_TYPE_FLAT_RATE_IMPRESSIONS"
    PRICING_TYPE_FLAT_RATE_CLICKS = "PRICING_TYPE_FLAT_RATE_CLICKS"
    PRICING_TYPE_CPM_ACTIVEVIEW = "PRICING_TYPE_CPM_ACTIVEVIEW"

class DfareportingPlacementGroupsListSortFieldEnum(str, Enum):
    ID = "ID"
    NAME = "NAME"

class DfareportingPlacementGroupsListSortOrderEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass
class DfareportingPlacementGroupsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    active_status: Optional[List[DfareportingPlacementGroupsListActiveStatusEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'activeStatus', 'style': 'form', 'explode': True }})
    advertiser_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'advertiserIds', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    campaign_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'campaignIds', 'style': 'form', 'explode': True }})
    content_category_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'contentCategoryIds', 'style': 'form', 'explode': True }})
    directory_site_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'directorySiteIds', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxEndDate', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    max_start_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxStartDate', 'style': 'form', 'explode': True }})
    min_end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'minEndDate', 'style': 'form', 'explode': True }})
    min_start_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'minStartDate', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    placement_group_type: Optional[DfareportingPlacementGroupsListPlacementGroupTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'placementGroupType', 'style': 'form', 'explode': True }})
    placement_strategy_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'placementStrategyIds', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    pricing_types: Optional[List[DfareportingPlacementGroupsListPricingTypesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'pricingTypes', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    search_string: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchString', 'style': 'form', 'explode': True }})
    site_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'siteIds', 'style': 'form', 'explode': True }})
    sort_field: Optional[DfareportingPlacementGroupsListSortFieldEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortField', 'style': 'form', 'explode': True }})
    sort_order: Optional[DfareportingPlacementGroupsListSortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class DfareportingPlacementGroupsListSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DfareportingPlacementGroupsListRequest:
    path_params: DfareportingPlacementGroupsListPathParams = field()
    query_params: DfareportingPlacementGroupsListQueryParams = field()
    security: DfareportingPlacementGroupsListSecurity = field()
    

@dataclass
class DfareportingPlacementGroupsListResponse:
    content_type: str = field()
    status_code: int = field()
    placement_groups_list_response: Optional[shared.PlacementGroupsListResponse] = field(default=None)
    
