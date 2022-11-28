from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentPageToken:
    r"""GoogleCloudDocumentaiV1DocumentPageToken
    A detected token.
    """
    
    detected_break: Optional[GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreak] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedBreak') }})
    detected_languages: Optional[List[GoogleCloudDocumentaiV1DocumentPageDetectedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedLanguages') }})
    layout: Optional[GoogleCloudDocumentaiV1DocumentPageLayout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layout') }})
    provenance: Optional[GoogleCloudDocumentaiV1DocumentProvenance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provenance') }})
    
