import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TcpSocketAction
/** 
 * Not supported by Cloud Run TCPSocketAction describes an action based on opening a socket
**/
export class TcpSocketAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;
}
