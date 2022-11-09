import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SocketAddressProtocolEnum {
    Tcp = "TCP"
,    Udp = "UDP"
}


// SocketAddress
/** 
 * [#next-free-field: 7]
**/
export class SocketAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=ipv4Compat" })
  ipv4Compat?: boolean;

  @Metadata({ data: "json, name=namedPort" })
  namedPort?: string;

  @Metadata({ data: "json, name=portValue" })
  portValue?: number;

  @Metadata({ data: "json, name=protocol" })
  protocol?: SocketAddressProtocolEnum;

  @Metadata({ data: "json, name=resolverName" })
  resolverName?: string;
}
