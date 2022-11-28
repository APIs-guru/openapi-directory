from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PrefixNode:
    r"""PrefixNode
    A message representing a key prefix node in the key prefix hierarchy. for eg. Bigtable keyspaces are lexicographically ordered mappings of keys to values. Keys often have a shared prefix structure where users use the keys to organize data. Eg ///employee In this case Keysight will possibly use one node for a company and reuse it for all employees that fall under the company. Doing so improves legibility in the UI.
    """
    
    data_source_node: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceNode') }})
    depth: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('depth') }})
    end_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endIndex') }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startIndex') }})
    word: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('word') }})
    
