import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Date } from "./date";


// DatedValue
/** 
 * Represents a single datapoint in the timeseries, where each datapoint is a date-value pair.
**/
export class DatedValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
