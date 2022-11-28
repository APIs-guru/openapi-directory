from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2DocumentPage:
    r"""GoogleCloudDocumentaiV1beta2DocumentPage
    A page in a Document.
    """
    
    blocks: Optional[List[GoogleCloudDocumentaiV1beta2DocumentPageBlock]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocks') }})
    detected_barcodes: Optional[List[GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedBarcodes') }})
    detected_languages: Optional[List[GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedLanguages') }})
    dimension: Optional[GoogleCloudDocumentaiV1beta2DocumentPageDimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimension') }})
    form_fields: Optional[List[GoogleCloudDocumentaiV1beta2DocumentPageFormField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formFields') }})
    image: Optional[GoogleCloudDocumentaiV1beta2DocumentPageImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    image_quality_scores: Optional[GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageQualityScores') }})
    layout: Optional[GoogleCloudDocumentaiV1beta2DocumentPageLayout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layout') }})
    lines: Optional[List[GoogleCloudDocumentaiV1beta2DocumentPageLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lines') }})
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumber') }})
    paragraphs: Optional[List[GoogleCloudDocumentaiV1beta2DocumentPageParagraph]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paragraphs') }})
    provenance: Optional[GoogleCloudDocumentaiV1beta2DocumentProvenance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provenance') }})
    symbols: Optional[List[GoogleCloudDocumentaiV1beta2DocumentPageSymbol]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('symbols') }})
    tables: Optional[List[GoogleCloudDocumentaiV1beta2DocumentPageTable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tables') }})
    tokens: Optional[List[GoogleCloudDocumentaiV1beta2DocumentPageToken]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokens') }})
    transforms: Optional[List[GoogleCloudDocumentaiV1beta2DocumentPageMatrix]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transforms') }})
    visual_elements: Optional[List[GoogleCloudDocumentaiV1beta2DocumentPageVisualElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visualElements') }})
    
