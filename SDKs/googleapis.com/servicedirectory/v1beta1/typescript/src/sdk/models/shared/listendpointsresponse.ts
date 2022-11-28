import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";



// ListEndpointsResponse
/** 
 * The response message for RegistrationService.ListEndpoints.
**/
export class ListEndpointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpoints", elemType: Endpoint })
  endpoints?: Endpoint[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
