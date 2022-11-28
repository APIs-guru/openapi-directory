from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TargetingTemplate:
    r"""TargetingTemplate
    Contains properties of a targeting template. A targeting template encapsulates targeting information which can be reused across multiple ads.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    advertiser_id_dimension_value: Optional[DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserIdDimensionValue') }})
    day_part_targeting: Optional[DayPartTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayPartTargeting') }})
    geo_targeting: Optional[GeoTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoTargeting') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    key_value_targeting_expression: Optional[KeyValueTargetingExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyValueTargetingExpression') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    language_targeting: Optional[LanguageTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageTargeting') }})
    list_targeting_expression: Optional[ListTargetingExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listTargetingExpression') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subaccountId') }})
    technology_targeting: Optional[TechnologyTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('technologyTargeting') }})
    
