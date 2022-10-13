from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2fieldid
from . import googleprivacydlpv2cryptokey


@dataclass_json
@dataclass
class GooglePrivacyDlpV2DateShiftConfig:
    context: Optional[googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    crypto_key: Optional[googleprivacydlpv2cryptokey.GooglePrivacyDlpV2CryptoKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cryptoKey' }})
    lower_bound_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lowerBoundDays' }})
    upper_bound_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upperBoundDays' }})
    
