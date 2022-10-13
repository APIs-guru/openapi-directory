from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class IntegralAdScienceDisplayViewabilityEnum(str, Enum):
    PERFORMANCE_VIEWABILITY_UNSPECIFIED = "PERFORMANCE_VIEWABILITY_UNSPECIFIED"
    PERFORMANCE_VIEWABILITY_40 = "PERFORMANCE_VIEWABILITY_40"
    PERFORMANCE_VIEWABILITY_50 = "PERFORMANCE_VIEWABILITY_50"
    PERFORMANCE_VIEWABILITY_60 = "PERFORMANCE_VIEWABILITY_60"
    PERFORMANCE_VIEWABILITY_70 = "PERFORMANCE_VIEWABILITY_70"

class IntegralAdScienceExcludedAdFraudRiskEnum(str, Enum):
    SUSPICIOUS_ACTIVITY_UNSPECIFIED = "SUSPICIOUS_ACTIVITY_UNSPECIFIED"
    SUSPICIOUS_ACTIVITY_HR = "SUSPICIOUS_ACTIVITY_HR"
    SUSPICIOUS_ACTIVITY_HMR = "SUSPICIOUS_ACTIVITY_HMR"

class IntegralAdScienceExcludedAdultRiskEnum(str, Enum):
    ADULT_UNSPECIFIED = "ADULT_UNSPECIFIED"
    ADULT_HR = "ADULT_HR"
    ADULT_HMR = "ADULT_HMR"

class IntegralAdScienceExcludedAlcoholRiskEnum(str, Enum):
    ALCOHOL_UNSPECIFIED = "ALCOHOL_UNSPECIFIED"
    ALCOHOL_HR = "ALCOHOL_HR"
    ALCOHOL_HMR = "ALCOHOL_HMR"

class IntegralAdScienceExcludedDrugsRiskEnum(str, Enum):
    DRUGS_UNSPECIFIED = "DRUGS_UNSPECIFIED"
    DRUGS_HR = "DRUGS_HR"
    DRUGS_HMR = "DRUGS_HMR"

class IntegralAdScienceExcludedGamblingRiskEnum(str, Enum):
    GAMBLING_UNSPECIFIED = "GAMBLING_UNSPECIFIED"
    GAMBLING_HR = "GAMBLING_HR"
    GAMBLING_HMR = "GAMBLING_HMR"

class IntegralAdScienceExcludedHateSpeechRiskEnum(str, Enum):
    HATE_SPEECH_UNSPECIFIED = "HATE_SPEECH_UNSPECIFIED"
    HATE_SPEECH_HR = "HATE_SPEECH_HR"
    HATE_SPEECH_HMR = "HATE_SPEECH_HMR"

class IntegralAdScienceExcludedIllegalDownloadsRiskEnum(str, Enum):
    ILLEGAL_DOWNLOADS_UNSPECIFIED = "ILLEGAL_DOWNLOADS_UNSPECIFIED"
    ILLEGAL_DOWNLOADS_HR = "ILLEGAL_DOWNLOADS_HR"
    ILLEGAL_DOWNLOADS_HMR = "ILLEGAL_DOWNLOADS_HMR"

class IntegralAdScienceExcludedOffensiveLanguageRiskEnum(str, Enum):
    OFFENSIVE_LANGUAGE_UNSPECIFIED = "OFFENSIVE_LANGUAGE_UNSPECIFIED"
    OFFENSIVE_LANGUAGE_HR = "OFFENSIVE_LANGUAGE_HR"
    OFFENSIVE_LANGUAGE_HMR = "OFFENSIVE_LANGUAGE_HMR"

class IntegralAdScienceExcludedViolenceRiskEnum(str, Enum):
    VIOLENCE_UNSPECIFIED = "VIOLENCE_UNSPECIFIED"
    VIOLENCE_HR = "VIOLENCE_HR"
    VIOLENCE_HMR = "VIOLENCE_HMR"

class IntegralAdScienceTraqScoreOptionEnum(str, Enum):
    TRAQ_UNSPECIFIED = "TRAQ_UNSPECIFIED"
    TRAQ_250 = "TRAQ_250"
    TRAQ_500 = "TRAQ_500"
    TRAQ_600 = "TRAQ_600"
    TRAQ_700 = "TRAQ_700"
    TRAQ_750 = "TRAQ_750"
    TRAQ_875 = "TRAQ_875"
    TRAQ_1000 = "TRAQ_1000"

class IntegralAdScienceVideoViewabilityEnum(str, Enum):
    VIDEO_VIEWABILITY_UNSPECIFIED = "VIDEO_VIEWABILITY_UNSPECIFIED"
    VIDEO_VIEWABILITY_40 = "VIDEO_VIEWABILITY_40"
    VIDEO_VIEWABILITY_50 = "VIDEO_VIEWABILITY_50"
    VIDEO_VIEWABILITY_60 = "VIDEO_VIEWABILITY_60"
    VIDEO_VIEWABILITY_70 = "VIDEO_VIEWABILITY_70"


@dataclass_json
@dataclass
class IntegralAdScience:
    custom_segment_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customSegmentId' }})
    display_viewability: Optional[IntegralAdScienceDisplayViewabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayViewability' }})
    exclude_unrateable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludeUnrateable' }})
    excluded_ad_fraud_risk: Optional[IntegralAdScienceExcludedAdFraudRiskEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedAdFraudRisk' }})
    excluded_adult_risk: Optional[IntegralAdScienceExcludedAdultRiskEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedAdultRisk' }})
    excluded_alcohol_risk: Optional[IntegralAdScienceExcludedAlcoholRiskEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedAlcoholRisk' }})
    excluded_drugs_risk: Optional[IntegralAdScienceExcludedDrugsRiskEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedDrugsRisk' }})
    excluded_gambling_risk: Optional[IntegralAdScienceExcludedGamblingRiskEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedGamblingRisk' }})
    excluded_hate_speech_risk: Optional[IntegralAdScienceExcludedHateSpeechRiskEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedHateSpeechRisk' }})
    excluded_illegal_downloads_risk: Optional[IntegralAdScienceExcludedIllegalDownloadsRiskEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedIllegalDownloadsRisk' }})
    excluded_offensive_language_risk: Optional[IntegralAdScienceExcludedOffensiveLanguageRiskEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedOffensiveLanguageRisk' }})
    excluded_violence_risk: Optional[IntegralAdScienceExcludedViolenceRiskEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedViolenceRisk' }})
    traq_score_option: Optional[IntegralAdScienceTraqScoreOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traqScoreOption' }})
    video_viewability: Optional[IntegralAdScienceVideoViewabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoViewability' }})
    
