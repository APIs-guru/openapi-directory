from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2bucketingconfig
from . import googleprivacydlpv2charactermaskconfig
from . import googleprivacydlpv2cryptodeterministicconfig
from . import googleprivacydlpv2cryptohashconfig
from . import googleprivacydlpv2cryptoreplaceffxfpeconfig
from . import googleprivacydlpv2dateshiftconfig
from . import googleprivacydlpv2fixedsizebucketingconfig
from . import googleprivacydlpv2replacevalueconfig
from . import googleprivacydlpv2replacedictionaryconfig
from . import googleprivacydlpv2timepartconfig


@dataclass_json
@dataclass
class GooglePrivacyDlpV2PrimitiveTransformation:
    bucketing_config: Optional[googleprivacydlpv2bucketingconfig.GooglePrivacyDlpV2BucketingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketingConfig' }})
    character_mask_config: Optional[googleprivacydlpv2charactermaskconfig.GooglePrivacyDlpV2CharacterMaskConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'characterMaskConfig' }})
    crypto_deterministic_config: Optional[googleprivacydlpv2cryptodeterministicconfig.GooglePrivacyDlpV2CryptoDeterministicConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cryptoDeterministicConfig' }})
    crypto_hash_config: Optional[googleprivacydlpv2cryptohashconfig.GooglePrivacyDlpV2CryptoHashConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cryptoHashConfig' }})
    crypto_replace_ffx_fpe_config: Optional[googleprivacydlpv2cryptoreplaceffxfpeconfig.GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cryptoReplaceFfxFpeConfig' }})
    date_shift_config: Optional[googleprivacydlpv2dateshiftconfig.GooglePrivacyDlpV2DateShiftConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateShiftConfig' }})
    fixed_size_bucketing_config: Optional[googleprivacydlpv2fixedsizebucketingconfig.GooglePrivacyDlpV2FixedSizeBucketingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedSizeBucketingConfig' }})
    redact_config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redactConfig' }})
    replace_config: Optional[googleprivacydlpv2replacevalueconfig.GooglePrivacyDlpV2ReplaceValueConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replaceConfig' }})
    replace_dictionary_config: Optional[googleprivacydlpv2replacedictionaryconfig.GooglePrivacyDlpV2ReplaceDictionaryConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replaceDictionaryConfig' }})
    replace_with_info_type_config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replaceWithInfoTypeConfig' }})
    time_part_config: Optional[googleprivacydlpv2timepartconfig.GooglePrivacyDlpV2TimePartConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timePartConfig' }})
    
