from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dicomconfig
from . import fhirconfig
from . import imageconfig
from . import textconfig


@dataclass_json
@dataclass
class DeidentifyConfig:
    dicom: Optional[dicomconfig.DicomConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dicom' }})
    fhir: Optional[fhirconfig.FhirConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fhir' }})
    image: Optional[imageconfig.ImageConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    text: Optional[textconfig.TextConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
