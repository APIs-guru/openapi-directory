import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnthosObservabilityFeatureSpec } from "./anthosobservabilityfeaturespec";
import { CloudAuditLoggingFeatureSpec } from "./cloudauditloggingfeaturespec";
import { MultiClusterIngressFeatureSpec } from "./multiclusteringressfeaturespec";
import { FeatureSpec } from "./featurespec";



// CommonFeatureSpec
/** 
 * CommonFeatureSpec contains Hub-wide configuration information
**/
export class CommonFeatureSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=anthosobservability" })
  anthosobservability?: AnthosObservabilityFeatureSpec;

  @SpeakeasyMetadata({ data: "json, name=appdevexperience" })
  appdevexperience?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=cloudauditlogging" })
  cloudauditlogging?: CloudAuditLoggingFeatureSpec;

  @SpeakeasyMetadata({ data: "json, name=fleetobservability" })
  fleetobservability?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=multiclusteringress" })
  multiclusteringress?: MultiClusterIngressFeatureSpec;

  @SpeakeasyMetadata({ data: "json, name=workloadcertificate" })
  workloadcertificate?: FeatureSpec;
}
