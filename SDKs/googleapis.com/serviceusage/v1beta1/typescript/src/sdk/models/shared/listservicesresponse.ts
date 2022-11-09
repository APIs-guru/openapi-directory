import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Service } from "./service";


// ListServicesResponse
/** 
 * Response message for the `ListServices` method.
**/
export class ListServicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=services", elemType: shared.Service })
  services?: Service[];
}
