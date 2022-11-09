import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GcsDestination } from "./gcsdestination";


// ExportMessagesRequest
/** 
 * Request to schedule an export.
**/
export class ExportMessagesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GcsDestination;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
