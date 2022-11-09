import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Point
/** 
 * A point in the timeseries.
**/
export class Point extends SpeakeasyBase {
  @Metadata({ data: "json, name=time" })
  time?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
