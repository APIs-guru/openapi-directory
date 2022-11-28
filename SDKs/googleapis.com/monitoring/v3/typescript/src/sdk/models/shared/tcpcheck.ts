import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PingConfig } from "./pingconfig";



// TcpCheck
/** 
 * Information required for a TCP Uptime check request.
**/
export class TcpCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pingConfig" })
  pingConfig?: PingConfig;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;
}
