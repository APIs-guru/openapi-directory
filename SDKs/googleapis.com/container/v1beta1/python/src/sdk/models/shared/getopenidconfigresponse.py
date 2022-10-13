from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import httpcachecontrolresponseheader


@dataclass_json
@dataclass
class GetOpenIDConfigResponse:
    cache_header: Optional[httpcachecontrolresponseheader.HTTPCacheControlResponseHeader] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheHeader' }})
    claims_supported: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'claims_supported' }})
    grant_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grant_types' }})
    id_token_signing_alg_values_supported: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id_token_signing_alg_values_supported' }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuer' }})
    jwks_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jwks_uri' }})
    response_types_supported: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response_types_supported' }})
    subject_types_supported: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject_types_supported' }})
    
