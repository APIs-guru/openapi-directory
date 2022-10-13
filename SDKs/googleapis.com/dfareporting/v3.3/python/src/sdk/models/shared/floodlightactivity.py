from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import dimensionvalue
from . import floodlightactivitydynamictag
from . import dimensionvalue
from . import dimensionvalue
from . import floodlightactivitypublisherdynamictag

class FloodlightActivityCacheBustingTypeEnum(str, Enum):
    JAVASCRIPT = "JAVASCRIPT"
    ACTIVE_SERVER_PAGE = "ACTIVE_SERVER_PAGE"
    JSP = "JSP"
    PHP = "PHP"
    COLD_FUSION = "COLD_FUSION"

class FloodlightActivityCountingMethodEnum(str, Enum):
    STANDARD_COUNTING = "STANDARD_COUNTING"
    UNIQUE_COUNTING = "UNIQUE_COUNTING"
    SESSION_COUNTING = "SESSION_COUNTING"
    TRANSACTIONS_COUNTING = "TRANSACTIONS_COUNTING"
    ITEMS_SOLD_COUNTING = "ITEMS_SOLD_COUNTING"

class FloodlightActivityFloodlightActivityGroupTypeEnum(str, Enum):
    COUNTER = "COUNTER"
    SALE = "SALE"

class FloodlightActivityFloodlightTagTypeEnum(str, Enum):
    IFRAME = "IFRAME"
    IMAGE = "IMAGE"
    GLOBAL_SITE_TAG = "GLOBAL_SITE_TAG"

class FloodlightActivityTagFormatEnum(str, Enum):
    HTML = "HTML"
    XHTML = "XHTML"

class FloodlightActivityUserDefinedVariableTypesEnum(str, Enum):
    U1 = "U1"
    U2 = "U2"
    U3 = "U3"
    U4 = "U4"
    U5 = "U5"
    U6 = "U6"
    U7 = "U7"
    U8 = "U8"
    U9 = "U9"
    U10 = "U10"
    U11 = "U11"
    U12 = "U12"
    U13 = "U13"
    U14 = "U14"
    U15 = "U15"
    U16 = "U16"
    U17 = "U17"
    U18 = "U18"
    U19 = "U19"
    U20 = "U20"
    U21 = "U21"
    U22 = "U22"
    U23 = "U23"
    U24 = "U24"
    U25 = "U25"
    U26 = "U26"
    U27 = "U27"
    U28 = "U28"
    U29 = "U29"
    U30 = "U30"
    U31 = "U31"
    U32 = "U32"
    U33 = "U33"
    U34 = "U34"
    U35 = "U35"
    U36 = "U36"
    U37 = "U37"
    U38 = "U38"
    U39 = "U39"
    U40 = "U40"
    U41 = "U41"
    U42 = "U42"
    U43 = "U43"
    U44 = "U44"
    U45 = "U45"
    U46 = "U46"
    U47 = "U47"
    U48 = "U48"
    U49 = "U49"
    U50 = "U50"
    U51 = "U51"
    U52 = "U52"
    U53 = "U53"
    U54 = "U54"
    U55 = "U55"
    U56 = "U56"
    U57 = "U57"
    U58 = "U58"
    U59 = "U59"
    U60 = "U60"
    U61 = "U61"
    U62 = "U62"
    U63 = "U63"
    U64 = "U64"
    U65 = "U65"
    U66 = "U66"
    U67 = "U67"
    U68 = "U68"
    U69 = "U69"
    U70 = "U70"
    U71 = "U71"
    U72 = "U72"
    U73 = "U73"
    U74 = "U74"
    U75 = "U75"
    U76 = "U76"
    U77 = "U77"
    U78 = "U78"
    U79 = "U79"
    U80 = "U80"
    U81 = "U81"
    U82 = "U82"
    U83 = "U83"
    U84 = "U84"
    U85 = "U85"
    U86 = "U86"
    U87 = "U87"
    U88 = "U88"
    U89 = "U89"
    U90 = "U90"
    U91 = "U91"
    U92 = "U92"
    U93 = "U93"
    U94 = "U94"
    U95 = "U95"
    U96 = "U96"
    U97 = "U97"
    U98 = "U98"
    U99 = "U99"
    U100 = "U100"


@dataclass_json
@dataclass
class FloodlightActivity:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    advertiser_id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserIdDimensionValue' }})
    cache_busting_type: Optional[FloodlightActivityCacheBustingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheBustingType' }})
    counting_method: Optional[FloodlightActivityCountingMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countingMethod' }})
    default_tags: Optional[List[floodlightactivitydynamictag.FloodlightActivityDynamicTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultTags' }})
    expected_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expectedUrl' }})
    floodlight_activity_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodlightActivityGroupId' }})
    floodlight_activity_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodlightActivityGroupName' }})
    floodlight_activity_group_tag_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodlightActivityGroupTagString' }})
    floodlight_activity_group_type: Optional[FloodlightActivityFloodlightActivityGroupTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodlightActivityGroupType' }})
    floodlight_configuration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodlightConfigurationId' }})
    floodlight_configuration_id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodlightConfigurationIdDimensionValue' }})
    floodlight_tag_type: Optional[FloodlightActivityFloodlightTagTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodlightTagType' }})
    hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hidden' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idDimensionValue' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    publisher_tags: Optional[List[floodlightactivitypublisherdynamictag.FloodlightActivityPublisherDynamicTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisherTags' }})
    secure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secure' }})
    ssl_compliant: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sslCompliant' }})
    ssl_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sslRequired' }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subaccountId' }})
    tag_format: Optional[FloodlightActivityTagFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagFormat' }})
    tag_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagString' }})
    user_defined_variable_types: Optional[List[FloodlightActivityUserDefinedVariableTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userDefinedVariableTypes' }})
    
