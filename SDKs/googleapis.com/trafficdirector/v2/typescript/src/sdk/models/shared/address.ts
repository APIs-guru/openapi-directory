import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Pipe } from "./pipe";
import { SocketAddress } from "./socketaddress";


// Address
/** 
 * Addresses specify either a logical or physical address and port, which are used to tell Envoy where to bind/listen, connect to upstream and find management servers.
**/
export class Address extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipe" })
  pipe?: Pipe;

  @Metadata({ data: "json, name=socketAddress" })
  socketAddress?: SocketAddress;
}
