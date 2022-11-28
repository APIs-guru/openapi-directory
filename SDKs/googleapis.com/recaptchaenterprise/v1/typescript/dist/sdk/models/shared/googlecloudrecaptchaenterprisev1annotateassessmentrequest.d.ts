import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum {
    AnnotationUnspecified = "ANNOTATION_UNSPECIFIED",
    Legitimate = "LEGITIMATE",
    Fraudulent = "FRAUDULENT",
    PasswordCorrect = "PASSWORD_CORRECT",
    PasswordIncorrect = "PASSWORD_INCORRECT"
}
export declare enum GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum {
    ReasonUnspecified = "REASON_UNSPECIFIED",
    Chargeback = "CHARGEBACK",
    ChargebackFraud = "CHARGEBACK_FRAUD",
    ChargebackDispute = "CHARGEBACK_DISPUTE",
    Refund = "REFUND",
    RefundFraud = "REFUND_FRAUD",
    TransactionAccepted = "TRANSACTION_ACCEPTED",
    TransactionDeclined = "TRANSACTION_DECLINED",
    PaymentHeuristics = "PAYMENT_HEURISTICS",
    InitiatedTwoFactor = "INITIATED_TWO_FACTOR",
    PassedTwoFactor = "PASSED_TWO_FACTOR",
    FailedTwoFactor = "FAILED_TWO_FACTOR",
    CorrectPassword = "CORRECT_PASSWORD",
    IncorrectPassword = "INCORRECT_PASSWORD",
    SocialSpam = "SOCIAL_SPAM"
}
/**
 * The request message to annotate an Assessment.
**/
export declare class GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest extends SpeakeasyBase {
    annotation?: GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum;
    hashedAccountId?: string;
    reasons?: GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum[];
}
