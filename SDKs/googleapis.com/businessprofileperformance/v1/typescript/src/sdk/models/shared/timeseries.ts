import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatedValue } from "./datedvalue";



// TimeSeries
/** 
 * Represents a timeseries.
**/
export class TimeSeries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datedValues", elemType: DatedValue })
  datedValues?: DatedValue[];
}
