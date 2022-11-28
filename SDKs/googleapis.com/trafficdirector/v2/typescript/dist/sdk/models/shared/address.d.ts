import { SpeakeasyBase } from "../../../internal/utils";
import { Pipe } from "./pipe";
import { SocketAddress } from "./socketaddress";
/**
 * Addresses specify either a logical or physical address and port, which are used to tell Envoy where to bind/listen, connect to upstream and find management servers.
**/
export declare class Address extends SpeakeasyBase {
    pipe?: Pipe;
    socketAddress?: SocketAddress;
}
