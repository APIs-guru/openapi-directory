import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AnthosVmSubFeatureSpec } from "./anthosvmsubfeaturespec";


// AnthosVmMembershipSpec
/** 
 * AnthosVMMembershipSpec contains the AnthosVM feature configuration for a membership/cluster.
**/
export class AnthosVmMembershipSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=subfeaturesSpec", elemType: shared.AnthosVmSubFeatureSpec })
  subfeaturesSpec?: AnthosVmSubFeatureSpec[];
}
