import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnthosObservabilityFeatureSpec } from "./anthosobservabilityfeaturespec";
import { CloudAuditLoggingFeatureSpec } from "./cloudauditloggingfeaturespec";
import { MultiClusterIngressFeatureSpec } from "./multiclusteringressfeaturespec";
import { FeatureSpec } from "./featurespec";


// CommonFeatureSpec
/** 
 * CommonFeatureSpec contains Hub-wide configuration information
**/
export class CommonFeatureSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=anthosobservability" })
  anthosobservability?: AnthosObservabilityFeatureSpec;

  @Metadata({ data: "json, name=appdevexperience" })
  appdevexperience?: Map<string, any>;

  @Metadata({ data: "json, name=cloudauditlogging" })
  cloudauditlogging?: CloudAuditLoggingFeatureSpec;

  @Metadata({ data: "json, name=multiclusteringress" })
  multiclusteringress?: MultiClusterIngressFeatureSpec;

  @Metadata({ data: "json, name=workloadcertificate" })
  workloadcertificate?: FeatureSpec;
}
