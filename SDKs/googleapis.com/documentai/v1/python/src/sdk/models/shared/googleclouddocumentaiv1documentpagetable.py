from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentPageTable:
    r"""GoogleCloudDocumentaiV1DocumentPageTable
    A table representation similar to HTML table structure.
    """
    
    body_rows: Optional[List[GoogleCloudDocumentaiV1DocumentPageTableTableRow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bodyRows') }})
    detected_languages: Optional[List[GoogleCloudDocumentaiV1DocumentPageDetectedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedLanguages') }})
    header_rows: Optional[List[GoogleCloudDocumentaiV1DocumentPageTableTableRow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headerRows') }})
    layout: Optional[GoogleCloudDocumentaiV1DocumentPageLayout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layout') }})
    provenance: Optional[GoogleCloudDocumentaiV1DocumentProvenance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provenance') }})
    
