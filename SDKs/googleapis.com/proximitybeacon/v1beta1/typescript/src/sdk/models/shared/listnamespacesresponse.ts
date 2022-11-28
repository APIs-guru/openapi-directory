import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Namespace } from "./namespace";



// ListNamespacesResponse
/** 
 * Response to ListNamespacesRequest that contains all the project's namespaces.
**/
export class ListNamespacesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=namespaces", elemType: Namespace })
  namespaces?: Namespace[];
}
