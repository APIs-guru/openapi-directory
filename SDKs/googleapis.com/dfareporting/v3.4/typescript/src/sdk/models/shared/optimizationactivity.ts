import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DimensionValue } from "./dimensionvalue";


// OptimizationActivity
/** 
 * Creative optimization activity.
**/
export class OptimizationActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=floodlightActivityId" })
  floodlightActivityId?: string;

  @Metadata({ data: "json, name=floodlightActivityIdDimensionValue" })
  floodlightActivityIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=weight" })
  weight?: number;
}
