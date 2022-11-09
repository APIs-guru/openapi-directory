import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Node
/** 
 * Kubernetes Nodes associated with the finding.
**/
export class Node extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
