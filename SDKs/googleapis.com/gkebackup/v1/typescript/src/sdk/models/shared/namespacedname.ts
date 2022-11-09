import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NamespacedName
/** 
 * A reference to a namespaced resource in Kubernetes.
**/
export class NamespacedName extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=namespace" })
  namespace?: string;
}
