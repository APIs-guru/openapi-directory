from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class VisionProjectsLocationsImagesAnnotatePathParams:
    parent: str = field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class VisionProjectsLocationsImagesAnnotateQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class VisionProjectsLocationsImagesAnnotateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class VisionProjectsLocationsImagesAnnotateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class VisionProjectsLocationsImagesAnnotateSecurity:
    option1: Optional[VisionProjectsLocationsImagesAnnotateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[VisionProjectsLocationsImagesAnnotateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class VisionProjectsLocationsImagesAnnotateRequest:
    path_params: VisionProjectsLocationsImagesAnnotatePathParams = field()
    query_params: VisionProjectsLocationsImagesAnnotateQueryParams = field()
    security: VisionProjectsLocationsImagesAnnotateSecurity = field()
    request: Optional[shared.BatchAnnotateImagesRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VisionProjectsLocationsImagesAnnotateResponse:
    content_type: str = field()
    status_code: int = field()
    batch_annotate_images_response: Optional[shared.BatchAnnotateImagesResponse] = field(default=None)
    
