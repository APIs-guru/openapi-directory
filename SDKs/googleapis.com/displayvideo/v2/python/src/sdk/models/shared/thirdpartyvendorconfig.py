from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ThirdPartyVendorConfigVendorEnum(str, Enum):
    THIRD_PARTY_VENDOR_UNSPECIFIED = "THIRD_PARTY_VENDOR_UNSPECIFIED"
    THIRD_PARTY_VENDOR_MOAT = "THIRD_PARTY_VENDOR_MOAT"
    THIRD_PARTY_VENDOR_DOUBLE_VERIFY = "THIRD_PARTY_VENDOR_DOUBLE_VERIFY"
    THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE = "THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE"
    THIRD_PARTY_VENDOR_COMSCORE = "THIRD_PARTY_VENDOR_COMSCORE"
    THIRD_PARTY_VENDOR_TELEMETRY = "THIRD_PARTY_VENDOR_TELEMETRY"
    THIRD_PARTY_VENDOR_MEETRICS = "THIRD_PARTY_VENDOR_MEETRICS"
    THIRD_PARTY_VENDOR_ZEFR = "THIRD_PARTY_VENDOR_ZEFR"
    THIRD_PARTY_VENDOR_NIELSEN = "THIRD_PARTY_VENDOR_NIELSEN"
    THIRD_PARTY_VENDOR_KANTAR = "THIRD_PARTY_VENDOR_KANTAR"
    THIRD_PARTY_VENDOR_DYNATA = "THIRD_PARTY_VENDOR_DYNATA"


@dataclass_json
@dataclass
class ThirdPartyVendorConfig:
    placement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placementId' }})
    vendor: Optional[ThirdPartyVendorConfigVendorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vendor' }})
    
