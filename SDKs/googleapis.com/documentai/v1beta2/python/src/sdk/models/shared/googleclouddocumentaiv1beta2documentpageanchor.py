from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2DocumentPageAnchor:
    r"""GoogleCloudDocumentaiV1beta2DocumentPageAnchor
    Referencing the visual context of the entity in the Document.pages. Page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types.
    """
    
    page_refs: Optional[List[GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageRefs') }})
    
