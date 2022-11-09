import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ManagedService } from "./managedservice";


// ListServicesResponse
/** 
 * Response message for `ListServices` method.
**/
export class ListServicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=services", elemType: shared.ManagedService })
  services?: ManagedService[];
}
