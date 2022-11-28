import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";



// DatedValue
/** 
 * Represents a single datapoint in the timeseries, where each datapoint is a date-value pair.
**/
export class DatedValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
