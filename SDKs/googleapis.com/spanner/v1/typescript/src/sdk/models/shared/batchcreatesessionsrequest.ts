import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SessionInput } from "./session";



// BatchCreateSessionsRequestInput
/** 
 * The request for BatchCreateSessions.
**/
export class BatchCreateSessionsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sessionCount" })
  sessionCount?: number;

  @SpeakeasyMetadata({ data: "json, name=sessionTemplate" })
  sessionTemplate?: SessionInput;
}
