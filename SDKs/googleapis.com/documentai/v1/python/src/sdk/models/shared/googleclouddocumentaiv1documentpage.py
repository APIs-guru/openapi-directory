from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1documentpageblock
from . import googleclouddocumentaiv1documentpagedetectedbarcode
from . import googleclouddocumentaiv1documentpagedetectedlanguage
from . import googleclouddocumentaiv1documentpagedimension
from . import googleclouddocumentaiv1documentpageformfield
from . import googleclouddocumentaiv1documentpageimage
from . import googleclouddocumentaiv1documentpageimagequalityscores
from . import googleclouddocumentaiv1documentpagelayout
from . import googleclouddocumentaiv1documentpageline
from . import googleclouddocumentaiv1documentpageparagraph
from . import googleclouddocumentaiv1documentprovenance
from . import googleclouddocumentaiv1documentpagesymbol
from . import googleclouddocumentaiv1documentpagetable
from . import googleclouddocumentaiv1documentpagetoken
from . import googleclouddocumentaiv1documentpagematrix
from . import googleclouddocumentaiv1documentpagevisualelement


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentPage:
    blocks: Optional[List[googleclouddocumentaiv1documentpageblock.GoogleCloudDocumentaiV1DocumentPageBlock]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blocks' }})
    detected_barcodes: Optional[List[googleclouddocumentaiv1documentpagedetectedbarcode.GoogleCloudDocumentaiV1DocumentPageDetectedBarcode]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectedBarcodes' }})
    detected_languages: Optional[List[googleclouddocumentaiv1documentpagedetectedlanguage.GoogleCloudDocumentaiV1DocumentPageDetectedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectedLanguages' }})
    dimension: Optional[googleclouddocumentaiv1documentpagedimension.GoogleCloudDocumentaiV1DocumentPageDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimension' }})
    form_fields: Optional[List[googleclouddocumentaiv1documentpageformfield.GoogleCloudDocumentaiV1DocumentPageFormField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formFields' }})
    image: Optional[googleclouddocumentaiv1documentpageimage.GoogleCloudDocumentaiV1DocumentPageImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    image_quality_scores: Optional[googleclouddocumentaiv1documentpageimagequalityscores.GoogleCloudDocumentaiV1DocumentPageImageQualityScores] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageQualityScores' }})
    layout: Optional[googleclouddocumentaiv1documentpagelayout.GoogleCloudDocumentaiV1DocumentPageLayout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layout' }})
    lines: Optional[List[googleclouddocumentaiv1documentpageline.GoogleCloudDocumentaiV1DocumentPageLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lines' }})
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageNumber' }})
    paragraphs: Optional[List[googleclouddocumentaiv1documentpageparagraph.GoogleCloudDocumentaiV1DocumentPageParagraph]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paragraphs' }})
    provenance: Optional[googleclouddocumentaiv1documentprovenance.GoogleCloudDocumentaiV1DocumentProvenance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provenance' }})
    symbols: Optional[List[googleclouddocumentaiv1documentpagesymbol.GoogleCloudDocumentaiV1DocumentPageSymbol]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'symbols' }})
    tables: Optional[List[googleclouddocumentaiv1documentpagetable.GoogleCloudDocumentaiV1DocumentPageTable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tables' }})
    tokens: Optional[List[googleclouddocumentaiv1documentpagetoken.GoogleCloudDocumentaiV1DocumentPageToken]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokens' }})
    transforms: Optional[List[googleclouddocumentaiv1documentpagematrix.GoogleCloudDocumentaiV1DocumentPageMatrix]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transforms' }})
    visual_elements: Optional[List[googleclouddocumentaiv1documentpagevisualelement.GoogleCloudDocumentaiV1DocumentPageVisualElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visualElements' }})
    
