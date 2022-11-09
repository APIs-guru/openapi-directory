import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ConnectionProtocolEnum {
    ProtocolUnspecified = "PROTOCOL_UNSPECIFIED"
,    Icmp = "ICMP"
,    Tcp = "TCP"
,    Udp = "UDP"
,    Gre = "GRE"
,    Esp = "ESP"
}


// Connection
/** 
 * Contains information about the IP connection associated with the finding.
**/
export class Connection extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationIp" })
  destinationIp?: string;

  @Metadata({ data: "json, name=destinationPort" })
  destinationPort?: number;

  @Metadata({ data: "json, name=protocol" })
  protocol?: ConnectionProtocolEnum;

  @Metadata({ data: "json, name=sourceIp" })
  sourceIp?: string;

  @Metadata({ data: "json, name=sourcePort" })
  sourcePort?: number;
}
