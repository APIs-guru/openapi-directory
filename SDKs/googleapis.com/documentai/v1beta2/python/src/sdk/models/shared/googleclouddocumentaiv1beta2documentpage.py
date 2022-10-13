from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta2documentpageblock
from . import googleclouddocumentaiv1beta2documentpagedetectedbarcode
from . import googleclouddocumentaiv1beta2documentpagedetectedlanguage
from . import googleclouddocumentaiv1beta2documentpagedimension
from . import googleclouddocumentaiv1beta2documentpageformfield
from . import googleclouddocumentaiv1beta2documentpageimage
from . import googleclouddocumentaiv1beta2documentpageimagequalityscores
from . import googleclouddocumentaiv1beta2documentpagelayout
from . import googleclouddocumentaiv1beta2documentpageline
from . import googleclouddocumentaiv1beta2documentpageparagraph
from . import googleclouddocumentaiv1beta2documentprovenance
from . import googleclouddocumentaiv1beta2documentpagesymbol
from . import googleclouddocumentaiv1beta2documentpagetable
from . import googleclouddocumentaiv1beta2documentpagetoken
from . import googleclouddocumentaiv1beta2documentpagematrix
from . import googleclouddocumentaiv1beta2documentpagevisualelement


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2DocumentPage:
    blocks: Optional[List[googleclouddocumentaiv1beta2documentpageblock.GoogleCloudDocumentaiV1beta2DocumentPageBlock]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blocks' }})
    detected_barcodes: Optional[List[googleclouddocumentaiv1beta2documentpagedetectedbarcode.GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectedBarcodes' }})
    detected_languages: Optional[List[googleclouddocumentaiv1beta2documentpagedetectedlanguage.GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectedLanguages' }})
    dimension: Optional[googleclouddocumentaiv1beta2documentpagedimension.GoogleCloudDocumentaiV1beta2DocumentPageDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimension' }})
    form_fields: Optional[List[googleclouddocumentaiv1beta2documentpageformfield.GoogleCloudDocumentaiV1beta2DocumentPageFormField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formFields' }})
    image: Optional[googleclouddocumentaiv1beta2documentpageimage.GoogleCloudDocumentaiV1beta2DocumentPageImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    image_quality_scores: Optional[googleclouddocumentaiv1beta2documentpageimagequalityscores.GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageQualityScores' }})
    layout: Optional[googleclouddocumentaiv1beta2documentpagelayout.GoogleCloudDocumentaiV1beta2DocumentPageLayout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layout' }})
    lines: Optional[List[googleclouddocumentaiv1beta2documentpageline.GoogleCloudDocumentaiV1beta2DocumentPageLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lines' }})
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageNumber' }})
    paragraphs: Optional[List[googleclouddocumentaiv1beta2documentpageparagraph.GoogleCloudDocumentaiV1beta2DocumentPageParagraph]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paragraphs' }})
    provenance: Optional[googleclouddocumentaiv1beta2documentprovenance.GoogleCloudDocumentaiV1beta2DocumentProvenance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provenance' }})
    symbols: Optional[List[googleclouddocumentaiv1beta2documentpagesymbol.GoogleCloudDocumentaiV1beta2DocumentPageSymbol]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'symbols' }})
    tables: Optional[List[googleclouddocumentaiv1beta2documentpagetable.GoogleCloudDocumentaiV1beta2DocumentPageTable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tables' }})
    tokens: Optional[List[googleclouddocumentaiv1beta2documentpagetoken.GoogleCloudDocumentaiV1beta2DocumentPageToken]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokens' }})
    transforms: Optional[List[googleclouddocumentaiv1beta2documentpagematrix.GoogleCloudDocumentaiV1beta2DocumentPageMatrix]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transforms' }})
    visual_elements: Optional[List[googleclouddocumentaiv1beta2documentpagevisualelement.GoogleCloudDocumentaiV1beta2DocumentPageVisualElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visualElements' }})
    
