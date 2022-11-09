import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PingConfig } from "./pingconfig";


// TcpCheck
/** 
 * Information required for a TCP Uptime check request.
**/
export class TcpCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=pingConfig" })
  pingConfig?: PingConfig;

  @Metadata({ data: "json, name=port" })
  port?: number;
}
