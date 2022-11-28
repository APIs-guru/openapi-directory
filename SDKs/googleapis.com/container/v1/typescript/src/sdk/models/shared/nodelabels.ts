import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NodeLabels
/** 
 * Collection of node-level [Kubernetes labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels).
**/
export class NodeLabels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}
