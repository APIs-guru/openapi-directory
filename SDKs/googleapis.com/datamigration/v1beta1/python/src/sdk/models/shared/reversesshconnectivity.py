from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReverseSSHConnectivity:
    r"""ReverseSSHConnectivity
    The details needed to configure a reverse SSH tunnel between the source and destination databases. These details will be used when calling the generateSshScript method (see https://cloud.google.com/database-migration/docs/reference/rest/v1beta1/projects.locations.migrationJobs/generateSshScript) to produce the script that will help set up the reverse SSH tunnel, and to set up the VPC peering between the Cloud SQL private network and the VPC.
    """
    
    vm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vm') }})
    vm_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmIp') }})
    vm_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmPort') }})
    vpc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpc') }})
    
