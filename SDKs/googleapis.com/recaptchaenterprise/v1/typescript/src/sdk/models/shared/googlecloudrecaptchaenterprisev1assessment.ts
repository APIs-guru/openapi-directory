import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment } from "./googlecloudrecaptchaenterprisev1accountdefenderassessment";
import { GoogleCloudRecaptchaenterpriseV1Event } from "./googlecloudrecaptchaenterprisev1event";
import { GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput } from "./googlecloudrecaptchaenterprisev1privatepasswordleakverification";
import { GoogleCloudRecaptchaenterpriseV1RiskAnalysis } from "./googlecloudrecaptchaenterprisev1riskanalysis";
import { GoogleCloudRecaptchaenterpriseV1TokenProperties } from "./googlecloudrecaptchaenterprisev1tokenproperties";
import { GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification } from "./googlecloudrecaptchaenterprisev1privatepasswordleakverification";



// GoogleCloudRecaptchaenterpriseV1AssessmentInput
/** 
 * A recaptcha assessment resource.
**/
export class GoogleCloudRecaptchaenterpriseV1AssessmentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountDefenderAssessment" })
  accountDefenderAssessment?: GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment;

  @SpeakeasyMetadata({ data: "json, name=event" })
  event?: GoogleCloudRecaptchaenterpriseV1Event;

  @SpeakeasyMetadata({ data: "json, name=privatePasswordLeakVerification" })
  privatePasswordLeakVerification?: GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput;

  @SpeakeasyMetadata({ data: "json, name=riskAnalysis" })
  riskAnalysis?: GoogleCloudRecaptchaenterpriseV1RiskAnalysis;

  @SpeakeasyMetadata({ data: "json, name=tokenProperties" })
  tokenProperties?: GoogleCloudRecaptchaenterpriseV1TokenProperties;
}


// GoogleCloudRecaptchaenterpriseV1Assessment
/** 
 * A recaptcha assessment resource.
**/
export class GoogleCloudRecaptchaenterpriseV1Assessment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountDefenderAssessment" })
  accountDefenderAssessment?: GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment;

  @SpeakeasyMetadata({ data: "json, name=event" })
  event?: GoogleCloudRecaptchaenterpriseV1Event;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=privatePasswordLeakVerification" })
  privatePasswordLeakVerification?: GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification;

  @SpeakeasyMetadata({ data: "json, name=riskAnalysis" })
  riskAnalysis?: GoogleCloudRecaptchaenterpriseV1RiskAnalysis;

  @SpeakeasyMetadata({ data: "json, name=tokenProperties" })
  tokenProperties?: GoogleCloudRecaptchaenterpriseV1TokenProperties;
}
