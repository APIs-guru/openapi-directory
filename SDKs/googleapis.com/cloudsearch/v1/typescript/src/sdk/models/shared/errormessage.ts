import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Source } from "./source";


// ErrorMessage
/** 
 * Error message per source response.
**/
export class ErrorMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=source" })
  source?: Source;
}
