import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TcpSocketAction
/** 
 * TCPSocketAction describes an action based on opening a socket
**/
export class TcpSocketAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;
}
