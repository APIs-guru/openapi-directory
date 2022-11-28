from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentPage:
    r"""GoogleCloudDocumentaiV1beta3DocumentPage
    A page in a Document.
    """
    
    blocks: Optional[List[GoogleCloudDocumentaiV1beta3DocumentPageBlock]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocks') }})
    detected_barcodes: Optional[List[GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedBarcodes') }})
    detected_languages: Optional[List[GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedLanguages') }})
    dimension: Optional[GoogleCloudDocumentaiV1beta3DocumentPageDimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimension') }})
    form_fields: Optional[List[GoogleCloudDocumentaiV1beta3DocumentPageFormField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formFields') }})
    image: Optional[GoogleCloudDocumentaiV1beta3DocumentPageImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    image_quality_scores: Optional[GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageQualityScores') }})
    layout: Optional[GoogleCloudDocumentaiV1beta3DocumentPageLayout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layout') }})
    lines: Optional[List[GoogleCloudDocumentaiV1beta3DocumentPageLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lines') }})
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumber') }})
    paragraphs: Optional[List[GoogleCloudDocumentaiV1beta3DocumentPageParagraph]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paragraphs') }})
    provenance: Optional[GoogleCloudDocumentaiV1beta3DocumentProvenance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provenance') }})
    symbols: Optional[List[GoogleCloudDocumentaiV1beta3DocumentPageSymbol]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('symbols') }})
    tables: Optional[List[GoogleCloudDocumentaiV1beta3DocumentPageTable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tables') }})
    tokens: Optional[List[GoogleCloudDocumentaiV1beta3DocumentPageToken]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokens') }})
    transforms: Optional[List[GoogleCloudDocumentaiV1beta3DocumentPageMatrix]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transforms') }})
    visual_elements: Optional[List[GoogleCloudDocumentaiV1beta3DocumentPageVisualElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visualElements') }})
    
