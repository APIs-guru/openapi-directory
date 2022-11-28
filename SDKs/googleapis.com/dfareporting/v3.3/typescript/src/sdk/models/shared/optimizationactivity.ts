import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";



// OptimizationActivity
/** 
 * Creative optimization activity.
**/
export class OptimizationActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=floodlightActivityId" })
  floodlightActivityId?: string;

  @SpeakeasyMetadata({ data: "json, name=floodlightActivityIdDimensionValue" })
  floodlightActivityIdDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}
