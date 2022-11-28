from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CdmaLocalID:
    r"""CdmaLocalID
    Local identification parameters of CDMA serving cell
    """
    
    channel: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    pn_offset: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pnOffset') }})
    
