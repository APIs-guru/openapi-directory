from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudOrgpolicyV2PolicySpec:
    r"""GoogleCloudOrgpolicyV2PolicySpec
    Defines a Cloud Organization `PolicySpec` which is used to specify `Constraints` for configurations of Cloud Platform resources.
    """
    
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    inherit_from_parent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inheritFromParent') }})
    reset: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reset') }})
    rules: Optional[List[GoogleCloudOrgpolicyV2PolicySpecPolicyRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class GoogleCloudOrgpolicyV2PolicySpecInput:
    r"""GoogleCloudOrgpolicyV2PolicySpecInput
    Defines a Cloud Organization `PolicySpec` which is used to specify `Constraints` for configurations of Cloud Platform resources.
    """
    
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    inherit_from_parent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inheritFromParent') }})
    reset: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reset') }})
    rules: Optional[List[GoogleCloudOrgpolicyV2PolicySpecPolicyRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
