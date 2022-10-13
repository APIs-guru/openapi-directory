from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import dimensionvalue
from . import customviewabilitymetric
from . import dimensionvalue
from . import lookbackconfiguration
from . import omnituresettings
from . import tagsettings
from . import thirdpartyauthenticationtoken
from . import userdefinedvariableconfiguration

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
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    advertiser_id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserIdDimensionValue' }})
    analytics_data_sharing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analyticsDataSharingEnabled' }})
    custom_viewability_metric: Optional[customviewabilitymetric.CustomViewabilityMetric] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customViewabilityMetric' }})
    exposure_to_conversion_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exposureToConversionEnabled' }})
    first_day_of_week: Optional[FloodlightConfigurationFirstDayOfWeekEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstDayOfWeek' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idDimensionValue' }})
    in_app_attribution_tracking_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inAppAttributionTrackingEnabled' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    lookback_configuration: Optional[lookbackconfiguration.LookbackConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lookbackConfiguration' }})
    natural_search_conversion_attribution_option: Optional[FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'naturalSearchConversionAttributionOption' }})
    omniture_settings: Optional[omnituresettings.OmnitureSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'omnitureSettings' }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subaccountId' }})
    tag_settings: Optional[tagsettings.TagSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagSettings' }})
    third_party_authentication_tokens: Optional[List[thirdpartyauthenticationtoken.ThirdPartyAuthenticationToken]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thirdPartyAuthenticationTokens' }})
    user_defined_variable_configurations: Optional[List[userdefinedvariableconfiguration.UserDefinedVariableConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userDefinedVariableConfigurations' }})
    
