import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";



// CollectdValueError
/** 
 * Describes the error status for values that were not written.
**/
export class CollectdValueError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;
}
