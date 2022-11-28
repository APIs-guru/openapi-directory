import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ConnectionProtocolEnum {
    ProtocolUnspecified = "PROTOCOL_UNSPECIFIED",
    Icmp = "ICMP",
    Tcp = "TCP",
    Udp = "UDP",
    Gre = "GRE",
    Esp = "ESP"
}


// Connection
/** 
 * Contains information about the IP connection associated with the finding.
**/
export class Connection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationIp" })
  destinationIp?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationPort" })
  destinationPort?: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: ConnectionProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=sourceIp" })
  sourceIp?: string;

  @SpeakeasyMetadata({ data: "json, name=sourcePort" })
  sourcePort?: number;
}
