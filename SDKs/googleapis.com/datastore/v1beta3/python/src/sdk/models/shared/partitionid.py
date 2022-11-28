from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PartitionID:
    r"""PartitionID
    A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty. A partition ID contains several dimensions: project ID and namespace ID. Partition dimensions: - May be `\"\"`. - Must be valid UTF-8 bytes. - Must have values that match regex `[A-Za-z\d\.\-_]{1,100}` If the value of any dimension matches regex `__.*__`, the partition is reserved/read-only. A reserved/read-only partition ID is forbidden in certain documented contexts. Foreign partition IDs (in which the project ID does not match the context project ID ) are discouraged. Reads and writes of foreign partition IDs may fail if the project is not in an active state.
    """
    
    namespace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceId') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    
