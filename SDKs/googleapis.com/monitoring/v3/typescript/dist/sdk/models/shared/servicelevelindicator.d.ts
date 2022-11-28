import { SpeakeasyBase } from "../../../internal/utils";
import { BasicSli } from "./basicsli";
import { RequestBasedSli } from "./requestbasedsli";
import { WindowsBasedSli } from "./windowsbasedsli";
/**
 * A Service-Level Indicator (SLI) describes the "performance" of a service. For some services, the SLI is well-defined. In such cases, the SLI can be described easily by referencing the well-known SLI and providing the needed parameters. Alternatively, a "custom" SLI can be defined with a query to the underlying metric store. An SLI is defined to be good_service / total_service over any queried time interval. The value of performance always falls into the range 0 <= performance <= 1. A custom SLI describes how to compute this ratio, whether this is by dividing values from a pair of time series, cutting a Distribution into good and bad counts, or counting time windows in which the service complies with a criterion. For separation of concerns, a single Service-Level Indicator measures performance for only one aspect of service quality, such as fraction of successful queries or fast-enough queries.
**/
export declare class ServiceLevelIndicator extends SpeakeasyBase {
    basicSli?: BasicSli;
    requestBased?: RequestBasedSli;
    windowsBased?: WindowsBasedSli;
}
