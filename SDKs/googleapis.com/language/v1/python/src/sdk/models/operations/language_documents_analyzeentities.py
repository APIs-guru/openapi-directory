from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class LanguageDocumentsAnalyzeEntitiesQueryParams:
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
class LanguageDocumentsAnalyzeEntitiesSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class LanguageDocumentsAnalyzeEntitiesSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class LanguageDocumentsAnalyzeEntitiesSecurity:
    option1: Optional[LanguageDocumentsAnalyzeEntitiesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[LanguageDocumentsAnalyzeEntitiesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class LanguageDocumentsAnalyzeEntitiesRequest:
    query_params: LanguageDocumentsAnalyzeEntitiesQueryParams = field()
    security: LanguageDocumentsAnalyzeEntitiesSecurity = field()
    request: Optional[shared.AnalyzeEntitiesRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class LanguageDocumentsAnalyzeEntitiesResponse:
    content_type: str = field()
    status_code: int = field()
    analyze_entities_response: Optional[shared.AnalyzeEntitiesResponse] = field(default=None)
    
