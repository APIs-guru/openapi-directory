import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SplitInt64 } from "./splitint64";


// IntegerGauge
/** 
 * A metric value representing temporal values of a variable.
**/
export class IntegerGauge extends SpeakeasyBase {
  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=value" })
  value?: SplitInt64;
}
