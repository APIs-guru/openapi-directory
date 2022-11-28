import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleApiServiceusageV1Service } from "./googleapiserviceusagev1service";



// BatchGetServicesResponse
/** 
 * Response message for the `BatchGetServices` method.
**/
export class BatchGetServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=services", elemType: GoogleApiServiceusageV1Service })
  services?: GoogleApiServiceusageV1Service[];
}
