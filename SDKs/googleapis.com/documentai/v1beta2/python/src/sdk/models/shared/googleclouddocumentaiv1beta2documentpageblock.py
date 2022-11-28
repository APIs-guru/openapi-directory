from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2DocumentPageBlock:
    r"""GoogleCloudDocumentaiV1beta2DocumentPageBlock
    A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
    """
    
    detected_languages: Optional[List[GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedLanguages') }})
    layout: Optional[GoogleCloudDocumentaiV1beta2DocumentPageLayout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layout') }})
    provenance: Optional[GoogleCloudDocumentaiV1beta2DocumentProvenance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provenance') }})
    
