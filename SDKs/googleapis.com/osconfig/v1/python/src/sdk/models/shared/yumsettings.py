from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class YumSettings:
    r"""YumSettings
    Yum patching is performed by executing `yum update`. Additional options can be set to control how this is executed. Note that not all settings are supported on all platforms.
    """
    
    excludes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludes') }})
    exclusive_packages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusivePackages') }})
    minimal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimal') }})
    security: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('security') }})
    
