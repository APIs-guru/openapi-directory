import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Namespaces
/** 
 * A list of Kubernetes Namespaces
**/
export class Namespaces extends SpeakeasyBase {
  @Metadata({ data: "json, name=namespaces" })
  namespaces?: string[];
}
