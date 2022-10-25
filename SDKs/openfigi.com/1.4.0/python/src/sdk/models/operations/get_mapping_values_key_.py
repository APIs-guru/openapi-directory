from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GetMappingValuesKeyKeyEnum(str, Enum):
    ID_TYPE = "idType"
    EXCH_CODE = "exchCode"
    MIC_CODE = "micCode"
    CURRENCY = "currency"
    MARKET_SEC_DES = "marketSecDes"
    SECURITY_TYPE = "securityType"
    SECURITY_TYPE2 = "securityType2"


@dataclass
class GetMappingValuesKeyPathParams:
    key: GetMappingValuesKeyKeyEnum = field(default=None, metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMappingValuesKeyRequest:
    path_params: GetMappingValuesKeyPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetMappingValuesKey200ApplicationJSON:
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    

@dataclass
class GetMappingValuesKeyResponse:
    content_type: str = field(default=None)
    get_mapping_values_key_200_application_json_object: Optional[GetMappingValuesKey200ApplicationJSON] = field(default=None)
    get_mapping_values_key_400_wildcard_string: Optional[str] = field(default=None)
    get_mapping_values_key_500_wildcard_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
