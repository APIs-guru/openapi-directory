from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DfareportingPlacementsGeneratetagsPathParams:
    profile_id: str = field(metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    
class DfareportingPlacementsGeneratetagsTagFormatsEnum(str, Enum):
    PLACEMENT_TAG_STANDARD = "PLACEMENT_TAG_STANDARD"
    PLACEMENT_TAG_IFRAME_JAVASCRIPT = "PLACEMENT_TAG_IFRAME_JAVASCRIPT"
    PLACEMENT_TAG_IFRAME_ILAYER = "PLACEMENT_TAG_IFRAME_ILAYER"
    PLACEMENT_TAG_INTERNAL_REDIRECT = "PLACEMENT_TAG_INTERNAL_REDIRECT"
    PLACEMENT_TAG_JAVASCRIPT = "PLACEMENT_TAG_JAVASCRIPT"
    PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT"
    PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT = "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT"
    PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT"
    PLACEMENT_TAG_CLICK_COMMANDS = "PLACEMENT_TAG_CLICK_COMMANDS"
    PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH"
    PLACEMENT_TAG_TRACKING = "PLACEMENT_TAG_TRACKING"
    PLACEMENT_TAG_TRACKING_IFRAME = "PLACEMENT_TAG_TRACKING_IFRAME"
    PLACEMENT_TAG_TRACKING_JAVASCRIPT = "PLACEMENT_TAG_TRACKING_JAVASCRIPT"
    PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3 = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3"
    PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY = "PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY"
    PLACEMENT_TAG_JAVASCRIPT_LEGACY = "PLACEMENT_TAG_JAVASCRIPT_LEGACY"
    PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY"
    PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY"
    PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4 = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4"
    PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT = "PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT"


@dataclass
class DfareportingPlacementsGeneratetagsQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    campaign_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'campaignId', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    placement_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'placementIds', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    tag_formats: Optional[List[DfareportingPlacementsGeneratetagsTagFormatsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'tagFormats', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class DfareportingPlacementsGeneratetagsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DfareportingPlacementsGeneratetagsRequest:
    path_params: DfareportingPlacementsGeneratetagsPathParams = field()
    query_params: DfareportingPlacementsGeneratetagsQueryParams = field()
    security: DfareportingPlacementsGeneratetagsSecurity = field()
    

@dataclass
class DfareportingPlacementsGeneratetagsResponse:
    content_type: str = field()
    status_code: int = field()
    placements_generate_tags_response: Optional[shared.PlacementsGenerateTagsResponse] = field(default=None)
    
