import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MaxPodsConstraint
/** 
 * Constraints applied to pods.
**/
export class MaxPodsConstraint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxPodsPerNode" })
  maxPodsPerNode?: string;
}
