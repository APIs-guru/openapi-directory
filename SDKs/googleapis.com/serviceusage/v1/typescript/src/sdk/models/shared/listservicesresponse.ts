import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleApiServiceusageV1Service } from "./googleapiserviceusagev1service";


// ListServicesResponse
/** 
 * Response message for the `ListServices` method.
**/
export class ListServicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=services", elemType: shared.GoogleApiServiceusageV1Service })
  services?: GoogleApiServiceusageV1Service[];
}
