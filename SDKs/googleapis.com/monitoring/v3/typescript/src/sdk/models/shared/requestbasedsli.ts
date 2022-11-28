import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DistributionCut } from "./distributioncut";
import { TimeSeriesRatio } from "./timeseriesratio";



// RequestBasedSli
/** 
 * Service Level Indicators for which atomic units of service are counted directly.
**/
export class RequestBasedSli extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distributionCut" })
  distributionCut?: DistributionCut;

  @SpeakeasyMetadata({ data: "json, name=goodTotalRatio" })
  goodTotalRatio?: TimeSeriesRatio;
}
