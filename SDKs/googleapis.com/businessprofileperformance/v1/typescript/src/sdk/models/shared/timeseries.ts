import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatedValue } from "./datedvalue";


// TimeSeries
/** 
 * Represents a timeseries.
**/
export class TimeSeries extends SpeakeasyBase {
  @Metadata({ data: "json, name=datedValues", elemType: shared.DatedValue })
  datedValues?: DatedValue[];
}
