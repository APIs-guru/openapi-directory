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
class GoogleCloudDatacatalogV1beta1UsageSignal:
    r"""GoogleCloudDatacatalogV1beta1UsageSignal
    The set of all usage signals that we store in Data Catalog.
    """
    
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    usage_within_time_range: Optional[dict[str, GoogleCloudDatacatalogV1beta1UsageStats]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageWithinTimeRange') }})
    
