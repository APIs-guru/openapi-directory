import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Node } from "./node";



// NodePool
/** 
 * Provides GKE Node Pool information.
**/
export class NodePool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodes", elemType: Node })
  nodes?: Node[];
}
