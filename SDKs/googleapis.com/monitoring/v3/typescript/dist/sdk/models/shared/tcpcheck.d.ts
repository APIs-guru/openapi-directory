import { SpeakeasyBase } from "../../../internal/utils";
import { PingConfig } from "./pingconfig";
/**
 * Information required for a TCP Uptime check request.
**/
export declare class TcpCheck extends SpeakeasyBase {
    pingConfig?: PingConfig;
    port?: number;
}
