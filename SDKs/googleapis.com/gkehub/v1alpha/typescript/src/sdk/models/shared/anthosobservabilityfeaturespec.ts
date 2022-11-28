import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnthosObservabilityMembershipSpec } from "./anthosobservabilitymembershipspec";



// AnthosObservabilityFeatureSpec
/** 
 * **Anthos Observability**: Spec
**/
export class AnthosObservabilityFeatureSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultMembershipSpec" })
  defaultMembershipSpec?: AnthosObservabilityMembershipSpec;
}
