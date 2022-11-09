import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Status } from "./status";


// ReportError
/** 
 * Represents the processing error of one Operation in the request.
**/
export class ReportError extends SpeakeasyBase {
  @Metadata({ data: "json, name=operationId" })
  operationId?: string;

  @Metadata({ data: "json, name=status" })
  status?: Status;
}
