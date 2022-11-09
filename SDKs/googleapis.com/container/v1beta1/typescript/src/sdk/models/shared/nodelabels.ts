import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NodeLabels
/** 
 * Collection of node-level [Kubernetes labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels).
**/
export class NodeLabels extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}
