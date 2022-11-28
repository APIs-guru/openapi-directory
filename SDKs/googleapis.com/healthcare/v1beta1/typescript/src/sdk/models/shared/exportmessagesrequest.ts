import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GcsDestination } from "./gcsdestination";



// ExportMessagesRequest
/** 
 * Request to schedule an export.
**/
export class ExportMessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GcsDestination;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
