import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RequestResponse
/** 
 * Success
**/
export class RequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
