import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QueryInfo } from "./queryinfo";


// ValidateResponse
/** 
 * Response to the validation request.
**/
export class ValidateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=queryInfo" })
  queryInfo?: QueryInfo;
}
