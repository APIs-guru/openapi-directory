import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OperationError
/** 
 * Database instance operation error.
**/
export class OperationError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
