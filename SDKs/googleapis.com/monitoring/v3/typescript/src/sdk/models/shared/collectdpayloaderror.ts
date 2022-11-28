import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { CollectdValueError } from "./collectdvalueerror";



// CollectdPayloadError
/** 
 * Describes the error status for payloads that were not written.
**/
export class CollectdPayloadError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=valueErrors", elemType: CollectdValueError })
  valueErrors?: CollectdValueError[];
}
