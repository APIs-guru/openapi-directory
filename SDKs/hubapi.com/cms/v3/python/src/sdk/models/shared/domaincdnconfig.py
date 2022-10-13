from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class DomainCdnConfigMinimumTLSVersionEnum(str, Enum):
    ONE_0 = "1.0"
    ONE_1 = "1.1"
    ONE_2 = "1.2"
    ONE_3 = "1.3"
    NONE = "none"
    NULL = "null"

class DomainCdnConfigSslStatusEnum(str, Enum):
    ZERO = "0"
    ONE = "1"
    TWO = "2"
    THREE = "3"
    FOUR = "4"
    FIVE = "5"
    SIX = "6"
    SEVEN = "7"
    EIGHT = "8"
    NINE = "9"
    TEN = "10"
    ELEVEN = "11"

class DomainCdnConfigValidationMethodEnum(str, Enum):
    ZERO = "0"
    ONE = "1"
    TWO = "2"


@dataclass_json
@dataclass
class DomainCdnConfig:
    alternate_origin_hostname: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alternateOriginHostname' }})
    cdn_group_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cdnGroupId' }})
    cdn_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cdnId' }})
    cert_expiration_date: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certExpirationDate' }})
    cert_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certId' }})
    cname: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cname' }})
    cname_target: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cnameTarget' }})
    created: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    domain_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainId' }})
    http_body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpBody' }})
    http_url_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpUrlPath' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    minimum_tls_version: DomainCdnConfigMinimumTLSVersionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumTlsVersion' }})
    portal_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalId' }})
    ssl_status: DomainCdnConfigSslStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sslStatus' }})
    updated: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    validation_method: DomainCdnConfigValidationMethodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationMethod' }})
    
