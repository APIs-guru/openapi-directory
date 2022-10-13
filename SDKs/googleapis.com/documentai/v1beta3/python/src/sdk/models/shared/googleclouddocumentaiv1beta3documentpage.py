from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3documentpageblock
from . import googleclouddocumentaiv1beta3documentpagedetectedbarcode
from . import googleclouddocumentaiv1beta3documentpagedetectedlanguage
from . import googleclouddocumentaiv1beta3documentpagedimension
from . import googleclouddocumentaiv1beta3documentpageformfield
from . import googleclouddocumentaiv1beta3documentpageimage
from . import googleclouddocumentaiv1beta3documentpageimagequalityscores
from . import googleclouddocumentaiv1beta3documentpagelayout
from . import googleclouddocumentaiv1beta3documentpageline
from . import googleclouddocumentaiv1beta3documentpageparagraph
from . import googleclouddocumentaiv1beta3documentprovenance
from . import googleclouddocumentaiv1beta3documentpagesymbol
from . import googleclouddocumentaiv1beta3documentpagetable
from . import googleclouddocumentaiv1beta3documentpagetoken
from . import googleclouddocumentaiv1beta3documentpagematrix
from . import googleclouddocumentaiv1beta3documentpagevisualelement


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentPage:
    blocks: Optional[List[googleclouddocumentaiv1beta3documentpageblock.GoogleCloudDocumentaiV1beta3DocumentPageBlock]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blocks' }})
    detected_barcodes: Optional[List[googleclouddocumentaiv1beta3documentpagedetectedbarcode.GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectedBarcodes' }})
    detected_languages: Optional[List[googleclouddocumentaiv1beta3documentpagedetectedlanguage.GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectedLanguages' }})
    dimension: Optional[googleclouddocumentaiv1beta3documentpagedimension.GoogleCloudDocumentaiV1beta3DocumentPageDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimension' }})
    form_fields: Optional[List[googleclouddocumentaiv1beta3documentpageformfield.GoogleCloudDocumentaiV1beta3DocumentPageFormField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formFields' }})
    image: Optional[googleclouddocumentaiv1beta3documentpageimage.GoogleCloudDocumentaiV1beta3DocumentPageImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    image_quality_scores: Optional[googleclouddocumentaiv1beta3documentpageimagequalityscores.GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageQualityScores' }})
    layout: Optional[googleclouddocumentaiv1beta3documentpagelayout.GoogleCloudDocumentaiV1beta3DocumentPageLayout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layout' }})
    lines: Optional[List[googleclouddocumentaiv1beta3documentpageline.GoogleCloudDocumentaiV1beta3DocumentPageLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lines' }})
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageNumber' }})
    paragraphs: Optional[List[googleclouddocumentaiv1beta3documentpageparagraph.GoogleCloudDocumentaiV1beta3DocumentPageParagraph]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paragraphs' }})
    provenance: Optional[googleclouddocumentaiv1beta3documentprovenance.GoogleCloudDocumentaiV1beta3DocumentProvenance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provenance' }})
    symbols: Optional[List[googleclouddocumentaiv1beta3documentpagesymbol.GoogleCloudDocumentaiV1beta3DocumentPageSymbol]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'symbols' }})
    tables: Optional[List[googleclouddocumentaiv1beta3documentpagetable.GoogleCloudDocumentaiV1beta3DocumentPageTable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tables' }})
    tokens: Optional[List[googleclouddocumentaiv1beta3documentpagetoken.GoogleCloudDocumentaiV1beta3DocumentPageToken]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokens' }})
    transforms: Optional[List[googleclouddocumentaiv1beta3documentpagematrix.GoogleCloudDocumentaiV1beta3DocumentPageMatrix]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transforms' }})
    visual_elements: Optional[List[googleclouddocumentaiv1beta3documentpagevisualelement.GoogleCloudDocumentaiV1beta3DocumentPageVisualElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visualElements' }})
    
