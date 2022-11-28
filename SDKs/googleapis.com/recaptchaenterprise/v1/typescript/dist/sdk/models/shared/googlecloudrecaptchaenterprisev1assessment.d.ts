import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment } from "./googlecloudrecaptchaenterprisev1accountdefenderassessment";
import { GoogleCloudRecaptchaenterpriseV1Event } from "./googlecloudrecaptchaenterprisev1event";
import { GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput } from "./googlecloudrecaptchaenterprisev1privatepasswordleakverification";
import { GoogleCloudRecaptchaenterpriseV1RiskAnalysis } from "./googlecloudrecaptchaenterprisev1riskanalysis";
import { GoogleCloudRecaptchaenterpriseV1TokenProperties } from "./googlecloudrecaptchaenterprisev1tokenproperties";
import { GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification } from "./googlecloudrecaptchaenterprisev1privatepasswordleakverification";
/**
 * A recaptcha assessment resource.
**/
export declare class GoogleCloudRecaptchaenterpriseV1AssessmentInput extends SpeakeasyBase {
    accountDefenderAssessment?: GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment;
    event?: GoogleCloudRecaptchaenterpriseV1Event;
    privatePasswordLeakVerification?: GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput;
    riskAnalysis?: GoogleCloudRecaptchaenterpriseV1RiskAnalysis;
    tokenProperties?: GoogleCloudRecaptchaenterpriseV1TokenProperties;
}
/**
 * A recaptcha assessment resource.
**/
export declare class GoogleCloudRecaptchaenterpriseV1Assessment extends SpeakeasyBase {
    accountDefenderAssessment?: GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment;
    event?: GoogleCloudRecaptchaenterpriseV1Event;
    name?: string;
    privatePasswordLeakVerification?: GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification;
    riskAnalysis?: GoogleCloudRecaptchaenterpriseV1RiskAnalysis;
    tokenProperties?: GoogleCloudRecaptchaenterpriseV1TokenProperties;
}
