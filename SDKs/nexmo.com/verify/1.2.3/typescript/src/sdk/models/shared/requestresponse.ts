import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RequestResponse
/** 
 * Success
**/
export class RequestResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=request_id" })
  requestId?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
