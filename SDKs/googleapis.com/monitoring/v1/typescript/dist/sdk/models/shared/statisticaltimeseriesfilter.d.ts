import { SpeakeasyBase } from "../../../internal/utils";
export declare enum StatisticalTimeSeriesFilterRankingMethodEnum {
    MethodUnspecified = "METHOD_UNSPECIFIED",
    MethodClusterOutlier = "METHOD_CLUSTER_OUTLIER"
}
/**
 * A filter that ranks streams based on their statistical relation to other streams in a request. Note: This field is deprecated and completely ignored by the API.
**/
export declare class StatisticalTimeSeriesFilter extends SpeakeasyBase {
    numTimeSeries?: number;
    rankingMethod?: StatisticalTimeSeriesFilterRankingMethodEnum;
}
