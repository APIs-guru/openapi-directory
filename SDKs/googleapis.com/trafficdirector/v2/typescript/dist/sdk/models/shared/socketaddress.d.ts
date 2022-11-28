import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SocketAddressProtocolEnum {
    Tcp = "TCP",
    Udp = "UDP"
}
/**
 * [#next-free-field: 7]
**/
export declare class SocketAddress extends SpeakeasyBase {
    address?: string;
    ipv4Compat?: boolean;
    namedPort?: string;
    portValue?: number;
    protocol?: SocketAddressProtocolEnum;
    resolverName?: string;
}
