from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class FloodlightConfigurationFirstDayOfWeekEnum(str, Enum):
    MONDAY = "MONDAY"
    SUNDAY = "SUNDAY"

class FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum(str, Enum):
    EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION = "EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION"
    INCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION = "INCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION"
    INCLUDE_NATURAL_SEARCH_TIERED_CONVERSION_ATTRIBUTION = "INCLUDE_NATURAL_SEARCH_TIERED_CONVERSION_ATTRIBUTION"


@dataclass_json
@dataclass
class FloodlightConfiguration:
    r"""FloodlightConfiguration
    Contains properties of a Floodlight configuration.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    advertiser_id_dimension_value: Optional[DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserIdDimensionValue') }})
    analytics_data_sharing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyticsDataSharingEnabled') }})
    custom_viewability_metric: Optional[CustomViewabilityMetric] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customViewabilityMetric') }})
    exposure_to_conversion_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exposureToConversionEnabled') }})
    first_day_of_week: Optional[FloodlightConfigurationFirstDayOfWeekEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstDayOfWeek') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    id_dimension_value: Optional[DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idDimensionValue') }})
    in_app_attribution_tracking_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inAppAttributionTrackingEnabled') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    lookback_configuration: Optional[LookbackConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lookbackConfiguration') }})
    natural_search_conversion_attribution_option: Optional[FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('naturalSearchConversionAttributionOption') }})
    omniture_settings: Optional[OmnitureSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('omnitureSettings') }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subaccountId') }})
    tag_settings: Optional[TagSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagSettings') }})
    third_party_authentication_tokens: Optional[List[ThirdPartyAuthenticationToken]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdPartyAuthenticationTokens') }})
    user_defined_variable_configurations: Optional[List[UserDefinedVariableConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userDefinedVariableConfigurations') }})
    
