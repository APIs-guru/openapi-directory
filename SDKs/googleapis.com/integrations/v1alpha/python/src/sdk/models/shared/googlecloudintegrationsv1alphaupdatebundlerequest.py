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
class GoogleCloudIntegrationsV1alphaUpdateBundleRequestInput:
    r"""GoogleCloudIntegrationsV1alphaUpdateBundleRequestInput
    THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. Request message for Bundle update
    """
    
    config: Optional[GoogleCloudIntegrationsV1alphaIntegrationBundleConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    
