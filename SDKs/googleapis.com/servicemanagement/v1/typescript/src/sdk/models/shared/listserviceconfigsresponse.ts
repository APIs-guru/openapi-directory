import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Service } from "./service";



// ListServiceConfigsResponse
/** 
 * Response message for ListServiceConfigs method.
**/
export class ListServiceConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceConfigs", elemType: Service })
  serviceConfigs?: Service[];
}
