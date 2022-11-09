import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CancelOperationRequest
/** 
 * CancelOperationRequest cancels a single operation.
**/
export class CancelOperationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=operationId" })
  operationId?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
