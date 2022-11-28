import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SplitInt64 } from "./splitint64";



// IntegerGauge
/** 
 * A metric value representing temporal values of a variable.
**/
export class IntegerGauge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: SplitInt64;
}
