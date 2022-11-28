import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryRequestPayload } from "./queryrequestpayload";



// QueryRequestInput
/** 
 * Device ID inputs to QueryRequest.
**/
export class QueryRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: QueryRequestPayload;
}
