import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DistributionCut } from "./distributioncut";
import { TimeSeriesRatio } from "./timeseriesratio";


// RequestBasedSli
/** 
 * Service Level Indicators for which atomic units of service are counted directly.
**/
export class RequestBasedSli extends SpeakeasyBase {
  @Metadata({ data: "json, name=distributionCut" })
  distributionCut?: DistributionCut;

  @Metadata({ data: "json, name=goodTotalRatio" })
  goodTotalRatio?: TimeSeriesRatio;
}
