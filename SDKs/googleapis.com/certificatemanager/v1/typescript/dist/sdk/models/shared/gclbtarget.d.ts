import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IpConfig } from "./ipconfig";
/**
 * Describes a Target Proxy which uses this Certificate Map.
**/
export declare class GclbTarget extends SpeakeasyBase {
    ipConfigs?: IpConfig[];
    targetHttpsProxy?: string;
    targetSslProxy?: string;
}
