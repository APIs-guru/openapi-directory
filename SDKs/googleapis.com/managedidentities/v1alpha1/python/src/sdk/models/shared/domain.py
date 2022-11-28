from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DomainStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    REPAIRING = "REPAIRING"
    PERFORMING_MAINTENANCE = "PERFORMING_MAINTENANCE"
    DOWN = "DOWN"


@dataclass_json
@dataclass
class Domain:
    r"""Domain
    If the domain is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
    """
    
    audit_logs_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditLogsEnabled') }})
    authorized_networks: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedNetworks') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    fqdn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fqdn') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    managed_identities_admin_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedIdentitiesAdminName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reserved_ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservedIpRange') }})
    state: Optional[DomainStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    trusts: Optional[List[Trust]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trusts') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
