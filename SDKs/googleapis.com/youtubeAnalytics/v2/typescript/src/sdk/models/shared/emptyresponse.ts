import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Errors } from "./errors";


// EmptyResponse
/** 
 * Empty response.
**/
export class EmptyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: Errors;
}
