import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";



// EmptyResponse
/** 
 * Empty response.
**/
export class EmptyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Errors;
}
