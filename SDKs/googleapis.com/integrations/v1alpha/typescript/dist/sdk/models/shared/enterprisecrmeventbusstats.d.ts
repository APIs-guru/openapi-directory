import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusStatsDimensions } from "./enterprisecrmeventbusstatsdimensions";
/**
 * Stats for the requested dimensions: QPS, duration, and error/warning rate
**/
export declare class EnterpriseCrmEventbusStats extends SpeakeasyBase {
    dimensions?: EnterpriseCrmEventbusStatsDimensions;
    durationInSeconds?: number;
    errorRate?: number;
    qps?: number;
    warningRate?: number;
}
