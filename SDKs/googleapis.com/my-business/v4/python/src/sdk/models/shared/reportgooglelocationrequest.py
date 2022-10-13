from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ReportGoogleLocationRequestReportReasonBadLocationEnum(str, Enum):
    BAD_LOCATION_REASON_UNSPECIFIED = "BAD_LOCATION_REASON_UNSPECIFIED"
    NOT_A_LOCATION = "NOT_A_LOCATION"
    PERMANENTLY_CLOSED = "PERMANENTLY_CLOSED"
    DOES_NOT_EXIST = "DOES_NOT_EXIST"
    SPAM = "SPAM"
    NOT_A_BUSINESS = "NOT_A_BUSINESS"
    MOVED = "MOVED"
    DUPLICATE = "DUPLICATE"

class ReportGoogleLocationRequestReportReasonBadRecommendationEnum(str, Enum):
    BAD_RECOMMENDATION_REASON_UNSPECIFIED = "BAD_RECOMMENDATION_REASON_UNSPECIFIED"
    NOT_A_STORE_FRONT = "NOT_A_STORE_FRONT"
    NOT_PART_OF_SUGGESTED_CHAIN = "NOT_PART_OF_SUGGESTED_CHAIN"
    IRRELEVANT = "IRRELEVANT"


@dataclass_json
@dataclass
class ReportGoogleLocationRequest:
    location_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationGroupName' }})
    report_reason_bad_location: Optional[ReportGoogleLocationRequestReportReasonBadLocationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportReasonBadLocation' }})
    report_reason_bad_recommendation: Optional[ReportGoogleLocationRequestReportReasonBadRecommendationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportReasonBadRecommendation' }})
    report_reason_elaboration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportReasonElaboration' }})
    report_reason_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportReasonLanguageCode' }})
    
