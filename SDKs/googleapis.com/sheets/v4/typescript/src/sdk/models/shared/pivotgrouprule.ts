import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DateTimeRule } from "./datetimerule";
import { HistogramRule } from "./histogramrule";
import { ManualRule } from "./manualrule";



// PivotGroupRule
/** 
 * An optional setting on a PivotGroup that defines buckets for the values in the source data column rather than breaking out each individual value. Only one PivotGroup with a group rule may be added for each column in the source data, though on any given column you may add both a PivotGroup that has a rule and a PivotGroup that does not.
**/
export class PivotGroupRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateTimeRule" })
  dateTimeRule?: DateTimeRule;

  @SpeakeasyMetadata({ data: "json, name=histogramRule" })
  histogramRule?: HistogramRule;

  @SpeakeasyMetadata({ data: "json, name=manualRule" })
  manualRule?: ManualRule;
}
