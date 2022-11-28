from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Event:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    critic_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('critic_name') }})
    event_detail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_detail_url') }})
    event_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_id') }})
    event_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_name') }})
    event_schedule_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_schedule_id') }})
    festival: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('festival') }})
    film_rating: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('film_rating') }})
    free: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    kid_friendly: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kid_friendly') }})
    last_chance: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_chance') }})
    last_modified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_modified') }})
    long_running_show: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('long_running_show') }})
    previews_and_openings: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previews_and_openings') }})
    recur_days: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recur_days') }})
    recurring_start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurring_start_date') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    times_pick: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('times_pick') }})
    web_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('web_description') }})
    
