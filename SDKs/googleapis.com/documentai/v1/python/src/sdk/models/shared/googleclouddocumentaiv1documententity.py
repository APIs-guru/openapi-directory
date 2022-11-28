from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentEntity:
    r"""GoogleCloudDocumentaiV1DocumentEntity
    An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location.
    """
    
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    mention_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mentionId') }})
    mention_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mentionText') }})
    normalized_value: Optional[GoogleCloudDocumentaiV1DocumentEntityNormalizedValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('normalizedValue') }})
    page_anchor: Optional[GoogleCloudDocumentaiV1DocumentPageAnchor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageAnchor') }})
    properties: Optional[List[GoogleCloudDocumentaiV1DocumentEntity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    provenance: Optional[GoogleCloudDocumentaiV1DocumentProvenance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provenance') }})
    redacted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redacted') }})
    text_anchor: Optional[GoogleCloudDocumentaiV1DocumentTextAnchor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textAnchor') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
