from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum(str, Enum):
    OPERATION_TYPE_UNSPECIFIED = "OPERATION_TYPE_UNSPECIFIED"
    ADD = "ADD"
    REMOVE = "REMOVE"
    REPLACE = "REPLACE"
    EVAL_REQUESTED = "EVAL_REQUESTED"
    EVAL_APPROVED = "EVAL_APPROVED"
    EVAL_SKIPPED = "EVAL_SKIPPED"


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentProvenance:
    r"""GoogleCloudDocumentaiV1DocumentProvenance
    Structure to identify provenance relationships between annotations in different revisions.
    """
    
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    parents: Optional[List[GoogleCloudDocumentaiV1DocumentProvenanceParent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parents') }})
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    type: Optional[GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
