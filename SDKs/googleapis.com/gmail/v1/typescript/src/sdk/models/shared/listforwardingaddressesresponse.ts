import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ForwardingAddress } from "./forwardingaddress";



// ListForwardingAddressesResponse
/** 
 * Response for the ListForwardingAddresses method.
**/
export class ListForwardingAddressesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=forwardingAddresses", elemType: ForwardingAddress })
  forwardingAddresses?: ForwardingAddress[];
}
