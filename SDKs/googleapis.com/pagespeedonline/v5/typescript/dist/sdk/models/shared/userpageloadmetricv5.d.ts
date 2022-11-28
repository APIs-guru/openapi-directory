import { SpeakeasyBase } from "../../../internal/utils";
import { Bucket } from "./bucket";
/**
 * A CrUX metric object for a single metric and form factor.
**/
export declare class UserPageLoadMetricV5 extends SpeakeasyBase {
    category?: string;
    distributions?: Bucket[];
    formFactor?: string;
    median?: number;
    metricId?: string;
    percentile?: number;
}
