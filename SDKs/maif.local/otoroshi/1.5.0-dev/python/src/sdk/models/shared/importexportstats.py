from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImportExportStats:
    r"""ImportExportStats
    Global stats for the current Otoroshi instances
    """
    
    calls: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('calls') }})
    data_in: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataIn') }})
    data_out: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataOut') }})
    
