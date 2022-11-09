import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdmissionWhitelistPattern } from "./admissionwhitelistpattern";
import { AdmissionRule } from "./admissionrule";
import { AdmissionRule } from "./admissionrule";
import { AdmissionRule } from "./admissionrule";
import { AdmissionRule } from "./admissionrule";
import { AdmissionRule } from "./admissionrule";

export enum PolicyGlobalPolicyEvaluationModeEnum {
    GlobalPolicyEvaluationModeUnspecified = "GLOBAL_POLICY_EVALUATION_MODE_UNSPECIFIED"
,    Enable = "ENABLE"
,    Disable = "DISABLE"
}


// Policy
/** 
 * A policy for container image binary authorization.
**/
export class Policy extends SpeakeasyBase {
  @Metadata({ data: "json, name=admissionWhitelistPatterns", elemType: shared.AdmissionWhitelistPattern })
  admissionWhitelistPatterns?: AdmissionWhitelistPattern[];

  @Metadata({ data: "json, name=clusterAdmissionRules", elemType: shared.AdmissionRule })
  clusterAdmissionRules?: Map<string, AdmissionRule>;

  @Metadata({ data: "json, name=defaultAdmissionRule" })
  defaultAdmissionRule?: AdmissionRule;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=globalPolicyEvaluationMode" })
  globalPolicyEvaluationMode?: PolicyGlobalPolicyEvaluationModeEnum;

  @Metadata({ data: "json, name=istioServiceIdentityAdmissionRules", elemType: shared.AdmissionRule })
  istioServiceIdentityAdmissionRules?: Map<string, AdmissionRule>;

  @Metadata({ data: "json, name=kubernetesNamespaceAdmissionRules", elemType: shared.AdmissionRule })
  kubernetesNamespaceAdmissionRules?: Map<string, AdmissionRule>;

  @Metadata({ data: "json, name=kubernetesServiceAccountAdmissionRules", elemType: shared.AdmissionRule })
  kubernetesServiceAccountAdmissionRules?: Map<string, AdmissionRule>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
