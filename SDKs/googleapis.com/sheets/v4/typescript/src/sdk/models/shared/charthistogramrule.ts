import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChartHistogramRule
/** 
 * Allows you to organize numeric values in a source data column into buckets of constant size.
**/
export class ChartHistogramRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=intervalSize" })
  intervalSize?: number;

  @Metadata({ data: "json, name=maxValue" })
  maxValue?: number;

  @Metadata({ data: "json, name=minValue" })
  minValue?: number;
}
