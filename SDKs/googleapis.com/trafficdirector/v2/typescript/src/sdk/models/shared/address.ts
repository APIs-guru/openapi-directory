import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Pipe } from "./pipe";
import { SocketAddress } from "./socketaddress";



// Address
/** 
 * Addresses specify either a logical or physical address and port, which are used to tell Envoy where to bind/listen, connect to upstream and find management servers.
**/
export class Address extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipe" })
  pipe?: Pipe;

  @SpeakeasyMetadata({ data: "json, name=socketAddress" })
  socketAddress?: SocketAddress;
}
