import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Node
/** 
 * Kubernetes Nodes associated with the finding.
**/
export class Node extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
