import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MaxPodsConstraint
/** 
 * Constraints applied to pods.
**/
export class MaxPodsConstraint extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxPodsPerNode" })
  maxPodsPerNode?: string;
}
