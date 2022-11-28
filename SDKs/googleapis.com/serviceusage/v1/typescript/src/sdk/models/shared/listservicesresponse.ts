import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleApiServiceusageV1Service } from "./googleapiserviceusagev1service";



// ListServicesResponse
/** 
 * Response message for the `ListServices` method.
**/
export class ListServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=services", elemType: GoogleApiServiceusageV1Service })
  services?: GoogleApiServiceusageV1Service[];
}
