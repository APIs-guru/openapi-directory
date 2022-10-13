from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta2documentprovenanceparent

class GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum(str, Enum):
    OPERATION_TYPE_UNSPECIFIED = "OPERATION_TYPE_UNSPECIFIED"
    ADD = "ADD"
    REMOVE = "REMOVE"
    REPLACE = "REPLACE"
    EVAL_REQUESTED = "EVAL_REQUESTED"
    EVAL_APPROVED = "EVAL_APPROVED"
    EVAL_SKIPPED = "EVAL_SKIPPED"


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2DocumentProvenance:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    parents: Optional[List[googleclouddocumentaiv1beta2documentprovenanceparent.GoogleCloudDocumentaiV1beta2DocumentProvenanceParent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parents' }})
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    type: Optional[GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
