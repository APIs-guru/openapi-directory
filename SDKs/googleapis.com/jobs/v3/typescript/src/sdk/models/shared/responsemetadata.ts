import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResponseMetadata
/** 
 * Output only. Additional information returned to client, such as debugging information.
**/
export class ResponseMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
