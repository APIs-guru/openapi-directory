import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Status } from "./status";


// CollectdValueError
/** 
 * Describes the error status for values that were not written.
**/
export class CollectdValueError extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Status;

  @Metadata({ data: "json, name=index" })
  index?: number;
}
