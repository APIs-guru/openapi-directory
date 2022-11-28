import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Namespaces
/** 
 * A list of Kubernetes Namespaces
**/
export class Namespaces extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=namespaces" })
  namespaces?: string[];
}
