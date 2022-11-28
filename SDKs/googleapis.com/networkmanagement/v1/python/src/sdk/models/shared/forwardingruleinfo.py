from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ForwardingRuleInfo:
    r"""ForwardingRuleInfo
    For display only. Metadata associated with a Compute Engine forwarding rule.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    matched_port_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchedPortRange') }})
    matched_protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchedProtocol') }})
    network_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkUri') }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    vip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vip') }})
    
