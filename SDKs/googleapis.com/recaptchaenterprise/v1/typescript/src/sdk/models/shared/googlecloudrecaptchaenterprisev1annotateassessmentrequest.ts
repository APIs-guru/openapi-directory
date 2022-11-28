import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum {
    AnnotationUnspecified = "ANNOTATION_UNSPECIFIED",
    Legitimate = "LEGITIMATE",
    Fraudulent = "FRAUDULENT",
    PasswordCorrect = "PASSWORD_CORRECT",
    PasswordIncorrect = "PASSWORD_INCORRECT"
}

export enum GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum {
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


// GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest
/** 
 * The request message to annotate an Assessment.
**/
export class GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotation" })
  annotation?: GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum;

  @SpeakeasyMetadata({ data: "json, name=hashedAccountId" })
  hashedAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=reasons" })
  reasons?: GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum[];
}
