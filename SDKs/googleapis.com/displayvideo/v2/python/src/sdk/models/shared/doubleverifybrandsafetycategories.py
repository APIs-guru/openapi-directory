from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum(str, Enum):
    HIGHER_SEVERITY_UNSPECIFIED = "HIGHER_SEVERITY_UNSPECIFIED"
    ADULT_CONTENT_PORNOGRAPHY = "ADULT_CONTENT_PORNOGRAPHY"
    COPYRIGHT_INFRINGEMENT = "COPYRIGHT_INFRINGEMENT"
    SUBSTANCE_ABUSE = "SUBSTANCE_ABUSE"
    GRAPHIC_VIOLENCE_WEAPONS = "GRAPHIC_VIOLENCE_WEAPONS"
    HATE_PROFANITY = "HATE_PROFANITY"
    CRIMINAL_SKILLS = "CRIMINAL_SKILLS"
    NUISANCE_INCENTIVIZED_MALWARE_CLUTTER = "NUISANCE_INCENTIVIZED_MALWARE_CLUTTER"

class DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum(str, Enum):
    MEDIUM_SEVERITY_UNSPECIFIED = "MEDIUM_SEVERITY_UNSPECIFIED"
    AD_SERVERS = "AD_SERVERS"
    ADULT_CONTENT_SWIMSUIT = "ADULT_CONTENT_SWIMSUIT"
    ALTERNATIVE_LIFESTYLES = "ALTERNATIVE_LIFESTYLES"
    CELEBRITY_GOSSIP = "CELEBRITY_GOSSIP"
    GAMBLING = "GAMBLING"
    OCCULT = "OCCULT"
    SEX_EDUCATION = "SEX_EDUCATION"
    DISASTER_AVIATION = "DISASTER_AVIATION"
    DISASTER_MAN_MADE = "DISASTER_MAN_MADE"
    DISASTER_NATURAL = "DISASTER_NATURAL"
    DISASTER_TERRORIST_EVENTS = "DISASTER_TERRORIST_EVENTS"
    DISASTER_VEHICLE = "DISASTER_VEHICLE"
    ALCOHOL = "ALCOHOL"
    SMOKING = "SMOKING"
    NEGATIVE_NEWS_FINANCIAL = "NEGATIVE_NEWS_FINANCIAL"
    NON_ENGLISH = "NON_ENGLISH"
    PARKING_PAGE = "PARKING_PAGE"
    UNMODERATED_UGC = "UNMODERATED_UGC"
    INFLAMMATORY_POLITICS_AND_NEWS = "INFLAMMATORY_POLITICS_AND_NEWS"
    NEGATIVE_NEWS_PHARMACEUTICAL = "NEGATIVE_NEWS_PHARMACEUTICAL"


@dataclass_json
@dataclass
class DoubleVerifyBrandSafetyCategories:
    r"""DoubleVerifyBrandSafetyCategories
    Settings for brand safety controls.
    """
    
    avoid_unknown_brand_safety_category: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avoidUnknownBrandSafetyCategory') }})
    avoided_high_severity_categories: Optional[List[DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avoidedHighSeverityCategories') }})
    avoided_medium_severity_categories: Optional[List[DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avoidedMediumSeverityCategories') }})
    
