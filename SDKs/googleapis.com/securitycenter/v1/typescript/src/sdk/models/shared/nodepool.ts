import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Node } from "./node";


// NodePool
/** 
 * Provides GKE Node Pool information.
**/
export class NodePool extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nodes", elemType: shared.Node })
  nodes?: Node[];
}
