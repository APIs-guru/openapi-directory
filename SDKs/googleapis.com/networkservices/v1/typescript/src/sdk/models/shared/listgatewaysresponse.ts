import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Gateway } from "./gateway";


// ListGatewaysResponse
/** 
 * Response returned by the ListGateways method.
**/
export class ListGatewaysResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=gateways", elemType: shared.Gateway })
  gateways?: Gateway[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
