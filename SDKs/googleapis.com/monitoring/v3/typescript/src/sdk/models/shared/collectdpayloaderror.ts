import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Status } from "./status";
import { CollectdValueError } from "./collectdvalueerror";


// CollectdPayloadError
/** 
 * Describes the error status for payloads that were not written.
**/
export class CollectdPayloadError extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Status;

  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=valueErrors", elemType: shared.CollectdValueError })
  valueErrors?: CollectdValueError[];
}
