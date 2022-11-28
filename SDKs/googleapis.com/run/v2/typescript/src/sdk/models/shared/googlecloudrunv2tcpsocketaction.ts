import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRunV2TcpSocketAction
/** 
 * TCPSocketAction describes an action based on opening a socket
**/
export class GoogleCloudRunV2TcpSocketAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;
}
