import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResponseMetadata
/** 
 * Additional information returned to client, such as debugging information.
**/
export class ResponseMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
