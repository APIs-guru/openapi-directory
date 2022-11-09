import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Service } from "./service";


// ListServicesResponse
/** 
 * The response message for RegistrationService.ListServices.
**/
export class ListServicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=services", elemType: shared.Service })
  services?: Service[];
}
