import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperationError } from "./operationerror";



// OperationErrors
/** 
 * Database instance operation errors list wrapper.
**/
export class OperationErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: OperationError })
  errors?: OperationError[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
