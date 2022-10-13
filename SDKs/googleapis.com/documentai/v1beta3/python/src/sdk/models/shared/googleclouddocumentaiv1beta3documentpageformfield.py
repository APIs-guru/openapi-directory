from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3documentpagelayout
from . import googleclouddocumentaiv1beta3documentpagelayout
from . import googleclouddocumentaiv1beta3documentpagedetectedlanguage
from . import googleclouddocumentaiv1beta3documentprovenance
from . import googleclouddocumentaiv1beta3documentpagedetectedlanguage


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentPageFormField:
    corrected_key_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'correctedKeyText' }})
    corrected_value_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'correctedValueText' }})
    field_name: Optional[googleclouddocumentaiv1beta3documentpagelayout.GoogleCloudDocumentaiV1beta3DocumentPageLayout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldName' }})
    field_value: Optional[googleclouddocumentaiv1beta3documentpagelayout.GoogleCloudDocumentaiV1beta3DocumentPageLayout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldValue' }})
    name_detected_languages: Optional[List[googleclouddocumentaiv1beta3documentpagedetectedlanguage.GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameDetectedLanguages' }})
    provenance: Optional[googleclouddocumentaiv1beta3documentprovenance.GoogleCloudDocumentaiV1beta3DocumentProvenance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provenance' }})
    value_detected_languages: Optional[List[googleclouddocumentaiv1beta3documentpagedetectedlanguage.GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueDetectedLanguages' }})
    value_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueType' }})
    
