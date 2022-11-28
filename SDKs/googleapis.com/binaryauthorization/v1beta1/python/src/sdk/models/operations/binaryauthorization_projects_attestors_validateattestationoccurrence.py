from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BinaryauthorizationProjectsAttestorsValidateAttestationOccurrencePathParams:
    attestor: str = field(metadata={'path_param': { 'field_name': 'attestor', 'style': 'simple', 'explode': False }})
    

@dataclass
class BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceQueryParams:
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
class BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceRequest:
    path_params: BinaryauthorizationProjectsAttestorsValidateAttestationOccurrencePathParams = field()
    query_params: BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceQueryParams = field()
    security: BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceSecurity = field()
    request: Optional[shared.ValidateAttestationOccurrenceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceResponse:
    content_type: str = field()
    status_code: int = field()
    validate_attestation_occurrence_response: Optional[shared.ValidateAttestationOccurrenceResponse] = field(default=None)
    
