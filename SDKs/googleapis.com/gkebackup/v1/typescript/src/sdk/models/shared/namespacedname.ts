import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NamespacedName
/** 
 * A reference to a namespaced resource in Kubernetes.
**/
export class NamespacedName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace?: string;
}
