import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Namespace } from "./namespace";


// ListNamespacesResponse
/** 
 * The response message for RegistrationService.ListNamespaces.
**/
export class ListNamespacesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=namespaces", elemType: shared.Namespace })
  namespaces?: Namespace[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
