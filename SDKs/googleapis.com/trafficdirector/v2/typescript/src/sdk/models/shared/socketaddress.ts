import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SocketAddressProtocolEnum {
    Tcp = "TCP",
    Udp = "UDP"
}


// SocketAddress
/** 
 * [#next-free-field: 7]
**/
export class SocketAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=ipv4Compat" })
  ipv4Compat?: boolean;

  @SpeakeasyMetadata({ data: "json, name=namedPort" })
  namedPort?: string;

  @SpeakeasyMetadata({ data: "json, name=portValue" })
  portValue?: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: SocketAddressProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=resolverName" })
  resolverName?: string;
}
