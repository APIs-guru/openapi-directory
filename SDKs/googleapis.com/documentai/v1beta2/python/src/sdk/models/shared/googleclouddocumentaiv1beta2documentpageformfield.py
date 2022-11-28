from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2DocumentPageFormField:
    r"""GoogleCloudDocumentaiV1beta2DocumentPageFormField
    A form field detected on the page.
    """
    
    corrected_key_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('correctedKeyText') }})
    corrected_value_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('correctedValueText') }})
    field_name: Optional[GoogleCloudDocumentaiV1beta2DocumentPageLayout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldName') }})
    field_value: Optional[GoogleCloudDocumentaiV1beta2DocumentPageLayout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldValue') }})
    name_detected_languages: Optional[List[GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameDetectedLanguages') }})
    provenance: Optional[GoogleCloudDocumentaiV1beta2DocumentProvenance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provenance') }})
    value_detected_languages: Optional[List[GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueDetectedLanguages') }})
    value_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueType') }})
    
