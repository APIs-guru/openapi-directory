import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListLogsResponse
/** 
 * Result returned from ListLogs.
**/
export class ListLogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logNames" })
  logNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
