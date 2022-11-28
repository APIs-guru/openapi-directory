from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata:
    r"""GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata
    Specifies the FHIR paths to match and how to handle the de-identification of matching fields.
    """
    
    character_mask_field: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('characterMaskField') }})
    clean_text_field: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cleanTextField') }})
    crypto_hash_field: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoHashField') }})
    date_shift_field: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateShiftField') }})
    keep_field: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keepField') }})
    paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paths') }})
    remove_field: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removeField') }})
    
