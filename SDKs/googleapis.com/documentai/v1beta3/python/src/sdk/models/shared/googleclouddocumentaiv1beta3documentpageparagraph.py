from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentPageParagraph:
    r"""GoogleCloudDocumentaiV1beta3DocumentPageParagraph
    A collection of lines that a human would perceive as a paragraph.
    """
    
    detected_languages: Optional[List[GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedLanguages') }})
    layout: Optional[GoogleCloudDocumentaiV1beta3DocumentPageLayout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layout') }})
    provenance: Optional[GoogleCloudDocumentaiV1beta3DocumentProvenance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provenance') }})
    
