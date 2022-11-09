import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnthosObservabilityFeatureSpec } from "./anthosobservabilityfeaturespec";
import { MultiClusterIngressFeatureSpec } from "./multiclusteringressfeaturespec";


// CommonFeatureSpec
/** 
 * CommonFeatureSpec contains Hub-wide configuration information
**/
export class CommonFeatureSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=anthosobservability" })
  anthosobservability?: AnthosObservabilityFeatureSpec;

  @Metadata({ data: "json, name=appdevexperience" })
  appdevexperience?: Map<string, any>;

  @Metadata({ data: "json, name=multiclusteringress" })
  multiclusteringress?: MultiClusterIngressFeatureSpec;
}
