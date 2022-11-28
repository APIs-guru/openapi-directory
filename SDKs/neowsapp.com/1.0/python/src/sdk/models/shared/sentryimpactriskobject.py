from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SentryImpactRiskObject:
    palermo_scale_max: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Palermo_scale_max') }})
    absolute_magnitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('absolute_magnitude') }})
    average_lunar_distance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('average_lunar_distance') }})
    designation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('designation') }})
    estimated_diameter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimated_diameter') }})
    fullname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullname') }})
    impact_probability: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impact_probability') }})
    is_active_sentry_object: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_active_sentry_object') }})
    last_obs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_obs') }})
    last_obs_jd: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_obs_jd') }})
    palermo_scale_ave: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('palermo_scale_ave') }})
    potential_impacts: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('potential_impacts') }})
    removal_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removal_date') }})
    sentry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentryId') }})
    torino_scale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('torino_scale') }})
    v_infinity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('v_infinity') }})
    year_range_max: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year_range_max') }})
    year_range_min: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year_range_min') }})
    
