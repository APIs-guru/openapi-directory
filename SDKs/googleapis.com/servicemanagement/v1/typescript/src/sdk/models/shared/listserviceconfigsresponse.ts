import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Service } from "./service";


// ListServiceConfigsResponse
/** 
 * Response message for ListServiceConfigs method.
**/
export class ListServiceConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=serviceConfigs", elemType: shared.Service })
  serviceConfigs?: Service[];
}
