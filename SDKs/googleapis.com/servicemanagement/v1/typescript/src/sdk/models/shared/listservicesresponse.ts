import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedService } from "./managedservice";



// ListServicesResponse
/** 
 * Response message for `ListServices` method.
**/
export class ListServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=services", elemType: ManagedService })
  services?: ManagedService[];
}
