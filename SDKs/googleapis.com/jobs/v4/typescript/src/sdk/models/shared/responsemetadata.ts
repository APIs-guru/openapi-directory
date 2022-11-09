import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResponseMetadata
/** 
 * Additional information returned to client, such as debugging information.
**/
export class ResponseMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
