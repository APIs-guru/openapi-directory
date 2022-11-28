import { SpeakeasyBase } from "../../../internal/utils";
import { DistributionCut } from "./distributioncut";
import { TimeSeriesRatio } from "./timeseriesratio";
/**
 * Service Level Indicators for which atomic units of service are counted directly.
**/
export declare class RequestBasedSli extends SpeakeasyBase {
    distributionCut?: DistributionCut;
    goodTotalRatio?: TimeSeriesRatio;
}
