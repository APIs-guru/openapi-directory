import { SpeakeasyBase } from "../../../internal/utils";
import { AdmissionWhitelistPattern } from "./admissionwhitelistpattern";
import { AdmissionRule } from "./admissionrule";
export declare enum PolicyGlobalPolicyEvaluationModeEnum {
    GlobalPolicyEvaluationModeUnspecified = "GLOBAL_POLICY_EVALUATION_MODE_UNSPECIFIED",
    Enable = "ENABLE",
    Disable = "DISABLE"
}
/**
 * A policy for Binary Authorization.
**/
export declare class Policy extends SpeakeasyBase {
    admissionWhitelistPatterns?: AdmissionWhitelistPattern[];
    clusterAdmissionRules?: Map<string, AdmissionRule>;
    defaultAdmissionRule?: AdmissionRule;
    description?: string;
    etag?: string;
    globalPolicyEvaluationMode?: PolicyGlobalPolicyEvaluationModeEnum;
    istioServiceIdentityAdmissionRules?: Map<string, AdmissionRule>;
    kubernetesNamespaceAdmissionRules?: Map<string, AdmissionRule>;
    kubernetesServiceAccountAdmissionRules?: Map<string, AdmissionRule>;
    name?: string;
    updateTime?: string;
}
