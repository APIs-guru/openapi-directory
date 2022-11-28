import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum {
    AccountDefenderLabelUnspecified = "ACCOUNT_DEFENDER_LABEL_UNSPECIFIED",
    ProfileMatch = "PROFILE_MATCH",
    SuspiciousLoginActivity = "SUSPICIOUS_LOGIN_ACTIVITY",
    SuspiciousAccountCreation = "SUSPICIOUS_ACCOUNT_CREATION",
    RelatedAccountsNumberHigh = "RELATED_ACCOUNTS_NUMBER_HIGH"
}
/**
 * Account defender risk assessment.
**/
export declare class GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment extends SpeakeasyBase {
    labels?: GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum[];
}
