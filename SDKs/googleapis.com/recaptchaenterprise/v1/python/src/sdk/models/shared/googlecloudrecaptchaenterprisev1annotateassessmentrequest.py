from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum(str, Enum):
    ANNOTATION_UNSPECIFIED = "ANNOTATION_UNSPECIFIED"
    LEGITIMATE = "LEGITIMATE"
    FRAUDULENT = "FRAUDULENT"
    PASSWORD_CORRECT = "PASSWORD_CORRECT"
    PASSWORD_INCORRECT = "PASSWORD_INCORRECT"

class GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum(str, Enum):
    REASON_UNSPECIFIED = "REASON_UNSPECIFIED"
    CHARGEBACK = "CHARGEBACK"
    CHARGEBACK_FRAUD = "CHARGEBACK_FRAUD"
    CHARGEBACK_DISPUTE = "CHARGEBACK_DISPUTE"
    REFUND = "REFUND"
    REFUND_FRAUD = "REFUND_FRAUD"
    TRANSACTION_ACCEPTED = "TRANSACTION_ACCEPTED"
    TRANSACTION_DECLINED = "TRANSACTION_DECLINED"
    PAYMENT_HEURISTICS = "PAYMENT_HEURISTICS"
    INITIATED_TWO_FACTOR = "INITIATED_TWO_FACTOR"
    PASSED_TWO_FACTOR = "PASSED_TWO_FACTOR"
    FAILED_TWO_FACTOR = "FAILED_TWO_FACTOR"
    CORRECT_PASSWORD = "CORRECT_PASSWORD"
    INCORRECT_PASSWORD = "INCORRECT_PASSWORD"
    SOCIAL_SPAM = "SOCIAL_SPAM"


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest:
    r"""GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest
    The request message to annotate an Assessment.
    """
    
    annotation: Optional[GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotation') }})
    hashed_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashedAccountId') }})
    reasons: Optional[List[GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasons') }})
    
