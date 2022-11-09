import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnthosObservabilityMembershipSpec } from "./anthosobservabilitymembershipspec";


// AnthosObservabilityFeatureSpec
/** 
 * **Anthos Observability**: Spec
**/
export class AnthosObservabilityFeatureSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultMembershipSpec" })
  defaultMembershipSpec?: AnthosObservabilityMembershipSpec;
}
