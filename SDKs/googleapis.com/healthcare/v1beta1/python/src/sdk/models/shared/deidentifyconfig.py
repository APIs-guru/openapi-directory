from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeidentifyConfig:
    r"""DeidentifyConfig
    Configures de-id options specific to different types of content. Each submessage customizes the handling of an https://tools.ietf.org/html/rfc6838 media type or subtype. Configs are applied in a nested manner at runtime.
    """
    
    annotation: Optional[AnnotationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotation') }})
    dicom: Optional[DicomConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dicom') }})
    dicom_tag_config: Optional[DicomTagConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dicomTagConfig') }})
    fhir: Optional[FhirConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fhir') }})
    fhir_field_config: Optional[FhirFieldConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fhirFieldConfig') }})
    image: Optional[ImageConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    operation_metadata: Optional[DeidentifyOperationMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationMetadata') }})
    text: Optional[TextConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
