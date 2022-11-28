from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1VariantsHistory:
    r"""GoogleCloudDialogflowCxV3beta1VariantsHistory
    The history of variants update.
    """
    
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    version_variants: Optional[GoogleCloudDialogflowCxV3beta1VersionVariants] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionVariants') }})
    
