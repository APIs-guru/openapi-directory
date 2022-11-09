import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomEventStatus } from "./customeventstatus";


// CustomEventsBatchInsertResponse
/** 
 * Insert Custom Events Response.
**/
export class CustomEventsBatchInsertResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=hasFailures" })
  hasFailures?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=status", elemType: shared.CustomEventStatus })
  status?: CustomEventStatus[];
}
