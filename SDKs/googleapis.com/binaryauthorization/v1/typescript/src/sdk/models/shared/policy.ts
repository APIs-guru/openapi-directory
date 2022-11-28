import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdmissionWhitelistPattern } from "./admissionwhitelistpattern";
import { AdmissionRule } from "./admissionrule";


export enum PolicyGlobalPolicyEvaluationModeEnum {
    GlobalPolicyEvaluationModeUnspecified = "GLOBAL_POLICY_EVALUATION_MODE_UNSPECIFIED",
    Enable = "ENABLE",
    Disable = "DISABLE"
}


// Policy
/** 
 * A policy for container image binary authorization.
**/
export class Policy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admissionWhitelistPatterns", elemType: AdmissionWhitelistPattern })
  admissionWhitelistPatterns?: AdmissionWhitelistPattern[];

  @SpeakeasyMetadata({ data: "json, name=clusterAdmissionRules", elemType: AdmissionRule })
  clusterAdmissionRules?: Map<string, AdmissionRule>;

  @SpeakeasyMetadata({ data: "json, name=defaultAdmissionRule" })
  defaultAdmissionRule?: AdmissionRule;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=globalPolicyEvaluationMode" })
  globalPolicyEvaluationMode?: PolicyGlobalPolicyEvaluationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=istioServiceIdentityAdmissionRules", elemType: AdmissionRule })
  istioServiceIdentityAdmissionRules?: Map<string, AdmissionRule>;

  @SpeakeasyMetadata({ data: "json, name=kubernetesNamespaceAdmissionRules", elemType: AdmissionRule })
  kubernetesNamespaceAdmissionRules?: Map<string, AdmissionRule>;

  @SpeakeasyMetadata({ data: "json, name=kubernetesServiceAccountAdmissionRules", elemType: AdmissionRule })
  kubernetesServiceAccountAdmissionRules?: Map<string, AdmissionRule>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
