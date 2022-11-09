import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Operation } from "./operation";


// CreateOperationRequest
/** 
 * Request for creating an operation
**/
export class CreateOperationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=operation" })
  operation?: Operation;

  @Metadata({ data: "json, name=operationId" })
  operationId?: string;
}
