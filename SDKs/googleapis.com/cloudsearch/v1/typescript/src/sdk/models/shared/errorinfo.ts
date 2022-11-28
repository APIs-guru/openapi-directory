import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorMessage } from "./errormessage";



// ErrorInfo
/** 
 * Error information about the response.
**/
export class ErrorInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorMessages", elemType: ErrorMessage })
  errorMessages?: ErrorMessage[];
}
