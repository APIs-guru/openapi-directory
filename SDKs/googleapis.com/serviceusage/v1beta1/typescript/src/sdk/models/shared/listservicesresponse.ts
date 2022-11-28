import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Service } from "./service";



// ListServicesResponse
/** 
 * Response message for the `ListServices` method.
**/
export class ListServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=services", elemType: Service })
  services?: Service[];
}
