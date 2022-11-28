import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Point
/** 
 * A point in the timeseries.
**/
export class Point extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
