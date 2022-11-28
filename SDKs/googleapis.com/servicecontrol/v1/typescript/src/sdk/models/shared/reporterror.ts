import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";



// ReportError
/** 
 * Represents the processing error of one Operation in the request.
**/
export class ReportError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operationId" })
  operationId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Status;
}
