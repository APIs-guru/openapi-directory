import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Namespace } from "./namespace";


// ListNamespacesResponse
/** 
 * Response to ListNamespacesRequest that contains all the project's namespaces.
**/
export class ListNamespacesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=namespaces", elemType: shared.Namespace })
  namespaces?: Namespace[];
}
