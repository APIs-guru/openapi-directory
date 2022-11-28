from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ITunesConnectAnalytics:
    r"""ITunesConnectAnalytics
    Parameters for iTunes Connect App Analytics.
    """
    
    at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('at') }})
    ct: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ct') }})
    mt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mt') }})
    pt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pt') }})
    
