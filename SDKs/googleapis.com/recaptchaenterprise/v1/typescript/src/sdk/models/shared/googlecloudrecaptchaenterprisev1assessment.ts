import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment } from "./googlecloudrecaptchaenterprisev1accountdefenderassessment";
import { GoogleCloudRecaptchaenterpriseV1Event } from "./googlecloudrecaptchaenterprisev1event";
import { GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification } from "./googlecloudrecaptchaenterprisev1privatepasswordleakverification";
import { GoogleCloudRecaptchaenterpriseV1RiskAnalysis } from "./googlecloudrecaptchaenterprisev1riskanalysis";
import { GoogleCloudRecaptchaenterpriseV1TokenProperties } from "./googlecloudrecaptchaenterprisev1tokenproperties";


// GoogleCloudRecaptchaenterpriseV1Assessment
/** 
 * A recaptcha assessment resource.
**/
export class GoogleCloudRecaptchaenterpriseV1Assessment extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountDefenderAssessment" })
  accountDefenderAssessment?: GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment;

  @Metadata({ data: "json, name=event" })
  event?: GoogleCloudRecaptchaenterpriseV1Event;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=privatePasswordLeakVerification" })
  privatePasswordLeakVerification?: GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification;

  @Metadata({ data: "json, name=riskAnalysis" })
  riskAnalysis?: GoogleCloudRecaptchaenterpriseV1RiskAnalysis;

  @Metadata({ data: "json, name=tokenProperties" })
  tokenProperties?: GoogleCloudRecaptchaenterpriseV1TokenProperties;
}
