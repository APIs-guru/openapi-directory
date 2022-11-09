import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OperationError } from "./operationerror";


// OperationErrors
/** 
 * Database instance operation errors list wrapper.
**/
export class OperationErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.OperationError })
  errors?: OperationError[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
