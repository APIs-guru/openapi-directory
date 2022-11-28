import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomEventStatus } from "./customeventstatus";



// CustomEventsBatchInsertResponse
/** 
 * Insert Custom Events Response.
**/
export class CustomEventsBatchInsertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hasFailures" })
  hasFailures?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=status", elemType: CustomEventStatus })
  status?: CustomEventStatus[];
}
