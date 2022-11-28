import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Gateway } from "./gateway";



// ListGatewaysResponse
/** 
 * Response returned by the ListGateways method.
**/
export class ListGatewaysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gateways", elemType: Gateway })
  gateways?: Gateway[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
