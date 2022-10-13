from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimensionvalue
from . import dayparttargeting
from . import geotargeting
from . import keyvaluetargetingexpression
from . import languagetargeting
from . import listtargetingexpression
from . import technologytargeting


@dataclass_json
@dataclass
class TargetingTemplate:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    advertiser_id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserIdDimensionValue' }})
    day_part_targeting: Optional[dayparttargeting.DayPartTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayPartTargeting' }})
    geo_targeting: Optional[geotargeting.GeoTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geoTargeting' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    key_value_targeting_expression: Optional[keyvaluetargetingexpression.KeyValueTargetingExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyValueTargetingExpression' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    language_targeting: Optional[languagetargeting.LanguageTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageTargeting' }})
    list_targeting_expression: Optional[listtargetingexpression.ListTargetingExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listTargetingExpression' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subaccountId' }})
    technology_targeting: Optional[technologytargeting.TechnologyTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'technologyTargeting' }})
    
