from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import annotationconfig
from . import dicomconfig
from . import fhirconfig
from . import imageconfig
from . import deidentifyoperationmetadata
from . import textconfig


@dataclass_json
@dataclass
class DeidentifyConfig:
    annotation: Optional[annotationconfig.AnnotationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotation' }})
    dicom: Optional[dicomconfig.DicomConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dicom' }})
    fhir: Optional[fhirconfig.FhirConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fhir' }})
    image: Optional[imageconfig.ImageConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    operation_metadata: Optional[deidentifyoperationmetadata.DeidentifyOperationMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationMetadata' }})
    text: Optional[textconfig.TextConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
