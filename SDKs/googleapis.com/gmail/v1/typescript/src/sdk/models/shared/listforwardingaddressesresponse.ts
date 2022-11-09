import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ForwardingAddress } from "./forwardingaddress";


// ListForwardingAddressesResponse
/** 
 * Response for the ListForwardingAddresses method.
**/
export class ListForwardingAddressesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=forwardingAddresses", elemType: shared.ForwardingAddress })
  forwardingAddresses?: ForwardingAddress[];
}
