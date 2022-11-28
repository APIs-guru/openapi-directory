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
class GoogleFirebaseFcmDataV1beta1AndroidDeliveryData:
    r"""GoogleFirebaseFcmDataV1beta1AndroidDeliveryData
    Message delivery data for a given date, app, and analytics label combination.
    """
    
    analytics_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyticsLabel') }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    data: Optional[GoogleFirebaseFcmDataV1beta1Data] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    date_: Optional[GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    
