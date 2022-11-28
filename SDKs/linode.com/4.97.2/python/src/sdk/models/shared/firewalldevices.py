from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FirewallDevicesEntityTypeEnum(str, Enum):
    LINODE = "linode"


@dataclass_json
@dataclass
class FirewallDevicesEntity:
    r"""FirewallDevicesEntity
    The Linode service that this Firewall has been applied to.
    
    """
    
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    type: Optional[FirewallDevicesEntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class FirewallDevices:
    r"""FirewallDevices
    Associates a Firewall with a Linode service. A Firewall can be assigned to a single Linode service at a time. Additional disabled Firewalls can be assigned to a service, but they cannot be enabled if another active Firewall is already assigned to the same service.
    
    """
    
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    entity: Optional[FirewallDevicesEntity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
