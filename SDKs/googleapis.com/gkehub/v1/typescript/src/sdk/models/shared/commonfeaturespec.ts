import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MultiClusterIngressFeatureSpec } from "./multiclusteringressfeaturespec";



// CommonFeatureSpec
/** 
 * CommonFeatureSpec contains Hub-wide configuration information
**/
export class CommonFeatureSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appdevexperience" })
  appdevexperience?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=fleetobservability" })
  fleetobservability?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=multiclusteringress" })
  multiclusteringress?: MultiClusterIngressFeatureSpec;
}
