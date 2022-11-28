from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2PrimitiveTransformation:
    r"""GooglePrivacyDlpV2PrimitiveTransformation
    A rule for transforming a value.
    """
    
    bucketing_config: Optional[GooglePrivacyDlpV2BucketingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketingConfig') }})
    character_mask_config: Optional[GooglePrivacyDlpV2CharacterMaskConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('characterMaskConfig') }})
    crypto_deterministic_config: Optional[GooglePrivacyDlpV2CryptoDeterministicConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoDeterministicConfig') }})
    crypto_hash_config: Optional[GooglePrivacyDlpV2CryptoHashConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoHashConfig') }})
    crypto_replace_ffx_fpe_config: Optional[GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoReplaceFfxFpeConfig') }})
    date_shift_config: Optional[GooglePrivacyDlpV2DateShiftConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateShiftConfig') }})
    fixed_size_bucketing_config: Optional[GooglePrivacyDlpV2FixedSizeBucketingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedSizeBucketingConfig') }})
    redact_config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redactConfig') }})
    replace_config: Optional[GooglePrivacyDlpV2ReplaceValueConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceConfig') }})
    replace_dictionary_config: Optional[GooglePrivacyDlpV2ReplaceDictionaryConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceDictionaryConfig') }})
    replace_with_info_type_config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceWithInfoTypeConfig') }})
    time_part_config: Optional[GooglePrivacyDlpV2TimePartConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timePartConfig') }})
    
