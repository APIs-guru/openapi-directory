import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleApiServiceusageV1Service } from "./googleapiserviceusagev1service";


// BatchGetServicesResponse
/** 
 * Response message for the `BatchGetServices` method.
**/
export class BatchGetServicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=services", elemType: shared.GoogleApiServiceusageV1Service })
  services?: GoogleApiServiceusageV1Service[];
}
