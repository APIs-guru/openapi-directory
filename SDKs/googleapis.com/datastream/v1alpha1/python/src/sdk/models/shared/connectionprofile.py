from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConnectionProfile:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    forward_ssh_connectivity: Optional[ForwardSSHTunnelConnectivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forwardSshConnectivity') }})
    gcs_profile: Optional[GcsProfile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsProfile') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    mysql_profile: Optional[MysqlProfile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysqlProfile') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    no_connectivity: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noConnectivity') }})
    oracle_profile: Optional[OracleProfile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oracleProfile') }})
    private_connectivity: Optional[PrivateConnectivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateConnectivity') }})
    static_service_ip_connectivity: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staticServiceIpConnectivity') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class ConnectionProfileInput:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    forward_ssh_connectivity: Optional[ForwardSSHTunnelConnectivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forwardSshConnectivity') }})
    gcs_profile: Optional[GcsProfile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsProfile') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    mysql_profile: Optional[MysqlProfileInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysqlProfile') }})
    no_connectivity: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noConnectivity') }})
    oracle_profile: Optional[OracleProfile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oracleProfile') }})
    private_connectivity: Optional[PrivateConnectivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateConnectivity') }})
    static_service_ip_connectivity: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staticServiceIpConnectivity') }})
    
