import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Namespace } from "./namespace";



// ListNamespacesResponse
/** 
 * The response message for RegistrationService.ListNamespaces.
**/
export class ListNamespacesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=namespaces", elemType: Namespace })
  namespaces?: Namespace[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
