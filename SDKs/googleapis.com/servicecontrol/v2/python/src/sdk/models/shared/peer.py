from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Peer:
    r"""Peer
    This message defines attributes for a node that handles a network request. The node can be either a service or an application that sends, forwards, or receives the request. Service peers should fill in `principal` and `labels` as appropriate.
    """
    
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    principal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principal') }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCode') }})
    
