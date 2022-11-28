from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VmwareSourceDetails:
    r"""VmwareSourceDetails
    VmwareSourceDetails message describes a specific source details for the vmware source type.
    """
    
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    thumbprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbprint') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    vcenter_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcenterIp') }})
    
