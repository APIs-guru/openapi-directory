import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CancelOperationRequest
/** 
 * CancelOperationRequest cancels a single operation.
**/
export class CancelOperationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operationId" })
  operationId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
