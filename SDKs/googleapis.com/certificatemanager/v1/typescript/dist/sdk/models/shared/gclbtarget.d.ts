import { SpeakeasyBase } from "../../../internal/utils";
import { IpConfig } from "./ipconfig";
/**
 * Describes a Target Proxy that uses this Certificate Map.
**/
export declare class GclbTarget extends SpeakeasyBase {
    ipConfigs?: IpConfig[];
    targetHttpsProxy?: string;
    targetSslProxy?: string;
}
