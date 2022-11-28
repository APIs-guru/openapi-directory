from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentPageVisualElement:
    r"""GoogleCloudDocumentaiV1DocumentPageVisualElement
    Detected non-text visual elements e.g. checkbox, signature etc. on the page.
    """
    
    detected_languages: Optional[List[GoogleCloudDocumentaiV1DocumentPageDetectedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedLanguages') }})
    layout: Optional[GoogleCloudDocumentaiV1DocumentPageLayout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layout') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
