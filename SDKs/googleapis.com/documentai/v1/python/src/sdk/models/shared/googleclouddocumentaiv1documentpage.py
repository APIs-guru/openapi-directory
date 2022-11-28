from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentPage:
    r"""GoogleCloudDocumentaiV1DocumentPage
    A page in a Document.
    """
    
    blocks: Optional[List[GoogleCloudDocumentaiV1DocumentPageBlock]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocks') }})
    detected_barcodes: Optional[List[GoogleCloudDocumentaiV1DocumentPageDetectedBarcode]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedBarcodes') }})
    detected_languages: Optional[List[GoogleCloudDocumentaiV1DocumentPageDetectedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedLanguages') }})
    dimension: Optional[GoogleCloudDocumentaiV1DocumentPageDimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimension') }})
    form_fields: Optional[List[GoogleCloudDocumentaiV1DocumentPageFormField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formFields') }})
    image: Optional[GoogleCloudDocumentaiV1DocumentPageImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    image_quality_scores: Optional[GoogleCloudDocumentaiV1DocumentPageImageQualityScores] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageQualityScores') }})
    layout: Optional[GoogleCloudDocumentaiV1DocumentPageLayout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layout') }})
    lines: Optional[List[GoogleCloudDocumentaiV1DocumentPageLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lines') }})
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumber') }})
    paragraphs: Optional[List[GoogleCloudDocumentaiV1DocumentPageParagraph]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paragraphs') }})
    provenance: Optional[GoogleCloudDocumentaiV1DocumentProvenance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provenance') }})
    symbols: Optional[List[GoogleCloudDocumentaiV1DocumentPageSymbol]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('symbols') }})
    tables: Optional[List[GoogleCloudDocumentaiV1DocumentPageTable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tables') }})
    tokens: Optional[List[GoogleCloudDocumentaiV1DocumentPageToken]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokens') }})
    transforms: Optional[List[GoogleCloudDocumentaiV1DocumentPageMatrix]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transforms') }})
    visual_elements: Optional[List[GoogleCloudDocumentaiV1DocumentPageVisualElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visualElements') }})
    
