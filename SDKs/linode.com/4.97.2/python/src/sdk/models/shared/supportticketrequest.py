from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SupportTicketRequest:
    r"""SupportTicketRequest
    An object representing a created Support Ticket - a question or issue and request for help from the Linode support team.
    Only one of the ID attributes (`linode_id`, `domain_id`, etc.) can be set on a single Support Ticket.
    
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    summary: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    domain_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain_id') }})
    linode_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linode_id') }})
    longviewclient_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longviewclient_id') }})
    managed_issue: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managed_issue') }})
    nodebalancer_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodebalancer_id') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    vlan: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    volume_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume_id') }})
    
