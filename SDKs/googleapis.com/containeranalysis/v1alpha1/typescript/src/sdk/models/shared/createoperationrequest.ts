import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";



// CreateOperationRequest
/** 
 * Request for creating an operation
**/
export class CreateOperationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: Operation;

  @SpeakeasyMetadata({ data: "json, name=operationId" })
  operationId?: string;
}
