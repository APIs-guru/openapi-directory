import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum {
    AccountDefenderLabelUnspecified = "ACCOUNT_DEFENDER_LABEL_UNSPECIFIED"
,    ProfileMatch = "PROFILE_MATCH"
,    SuspiciousLoginActivity = "SUSPICIOUS_LOGIN_ACTIVITY"
,    SuspiciousAccountCreation = "SUSPICIOUS_ACCOUNT_CREATION"
,    RelatedAccountsNumberHigh = "RELATED_ACCOUNTS_NUMBER_HIGH"
}


// GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment
/** 
 * Account defender risk assessment.
**/
export class GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum[];
}
