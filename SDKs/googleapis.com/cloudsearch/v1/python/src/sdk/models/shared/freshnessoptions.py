from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FreshnessOptions:
    r"""FreshnessOptions
    Indicates which freshness property to use when adjusting search ranking for an item. Fresher, more recent dates indicate higher quality. Use the freshness option property that best works with your data. For fileshare documents, last modified time is most relevant. For calendar event data, the time when the event occurs is a more relevant freshness indicator. In this way, calendar events that occur closer to the time of the search query are considered higher quality and ranked accordingly.
    """
    
    freshness_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freshnessDuration') }})
    freshness_property: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freshnessProperty') }})
    
