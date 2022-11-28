from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AudioMapping:
    r"""AudioMapping
    The mapping for the `Job.edit_list` atoms with audio `EditAtom.inputs`.
    """
    
    atom_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('atomKey') }})
    gain_db: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gainDb') }})
    input_channel: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputChannel') }})
    input_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputKey') }})
    input_track: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputTrack') }})
    output_channel: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputChannel') }})
    
