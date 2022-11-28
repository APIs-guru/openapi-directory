import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryInfo } from "./queryinfo";



// ValidateResponse
/** 
 * Response to the validation request.
**/
export class ValidateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=queryInfo" })
  queryInfo?: QueryInfo;
}
