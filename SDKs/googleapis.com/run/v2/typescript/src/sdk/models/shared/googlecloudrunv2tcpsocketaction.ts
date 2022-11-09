import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRunV2TcpSocketAction
/** 
 * TCPSocketAction describes an action based on opening a socket
**/
export class GoogleCloudRunV2TcpSocketAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;
}
