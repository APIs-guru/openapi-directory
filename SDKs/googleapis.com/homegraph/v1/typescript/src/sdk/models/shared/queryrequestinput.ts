import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QueryRequestPayload } from "./queryrequestpayload";


// QueryRequestInput
/** 
 * Device ID inputs to QueryRequest.
**/
export class QueryRequestInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=payload" })
  payload?: QueryRequestPayload;
}
