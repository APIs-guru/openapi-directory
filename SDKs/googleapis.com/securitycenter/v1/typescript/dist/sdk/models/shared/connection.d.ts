import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ConnectionProtocolEnum {
    ProtocolUnspecified = "PROTOCOL_UNSPECIFIED",
    Icmp = "ICMP",
    Tcp = "TCP",
    Udp = "UDP",
    Gre = "GRE",
    Esp = "ESP"
}
/**
 * Contains information about the IP connection associated with the finding.
**/
export declare class Connection extends SpeakeasyBase {
    destinationIp?: string;
    destinationPort?: number;
    protocol?: ConnectionProtocolEnum;
    sourceIp?: string;
    sourcePort?: number;
}
