import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OperationError
/** 
 * Database instance operation error.
**/
export class OperationError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
