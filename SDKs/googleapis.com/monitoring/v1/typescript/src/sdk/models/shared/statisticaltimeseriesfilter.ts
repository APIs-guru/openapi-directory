import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum StatisticalTimeSeriesFilterRankingMethodEnum {
    MethodUnspecified = "METHOD_UNSPECIFIED",
    MethodClusterOutlier = "METHOD_CLUSTER_OUTLIER"
}


// StatisticalTimeSeriesFilter
/** 
 * A filter that ranks streams based on their statistical relation to other streams in a request. Note: This field is deprecated and completely ignored by the API.
**/
export class StatisticalTimeSeriesFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numTimeSeries" })
  numTimeSeries?: number;

  @SpeakeasyMetadata({ data: "json, name=rankingMethod" })
  rankingMethod?: StatisticalTimeSeriesFilterRankingMethodEnum;
}
