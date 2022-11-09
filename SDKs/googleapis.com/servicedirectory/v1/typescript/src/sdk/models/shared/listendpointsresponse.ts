import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Endpoint } from "./endpoint";


// ListEndpointsResponse
/** 
 * The response message for RegistrationService.ListEndpoints.
**/
export class ListEndpointsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpoints", elemType: shared.Endpoint })
  endpoints?: Endpoint[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
