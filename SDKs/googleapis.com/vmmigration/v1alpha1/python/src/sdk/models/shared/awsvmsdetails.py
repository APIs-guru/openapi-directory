from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsVmsDetails:
    r"""AwsVmsDetails
    AWSVmsDetails describes VMs in AWS.
    """
    
    details: Optional[List[AwsVMDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    
