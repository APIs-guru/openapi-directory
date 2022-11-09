import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ErrorMessage } from "./errormessage";


// ErrorInfo
/** 
 * Error information about the response.
**/
export class ErrorInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorMessages", elemType: shared.ErrorMessage })
  errorMessages?: ErrorMessage[];
}
