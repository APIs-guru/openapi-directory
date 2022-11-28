import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChartHistogramRule
/** 
 * Allows you to organize numeric values in a source data column into buckets of constant size.
**/
export class ChartHistogramRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=intervalSize" })
  intervalSize?: number;

  @SpeakeasyMetadata({ data: "json, name=maxValue" })
  maxValue?: number;

  @SpeakeasyMetadata({ data: "json, name=minValue" })
  minValue?: number;
}
