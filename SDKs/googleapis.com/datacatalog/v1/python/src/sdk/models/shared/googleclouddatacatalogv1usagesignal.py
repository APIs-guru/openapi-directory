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
class GoogleCloudDatacatalogV1UsageSignal:
    r"""GoogleCloudDatacatalogV1UsageSignal
    The set of all usage signals that Data Catalog stores. Note: Usually, these signals are updated daily. In rare cases, an update may fail but will be performed again on the next day.
    """
    
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    usage_within_time_range: Optional[dict[str, GoogleCloudDatacatalogV1UsageStats]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageWithinTimeRange') }})
    

@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1UsageSignalInput:
    r"""GoogleCloudDatacatalogV1UsageSignalInput
    The set of all usage signals that Data Catalog stores. Note: Usually, these signals are updated daily. In rare cases, an update may fail but will be performed again on the next day.
    """
    
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
