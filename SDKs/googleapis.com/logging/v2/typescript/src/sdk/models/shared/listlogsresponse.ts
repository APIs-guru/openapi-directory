import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListLogsResponse
/** 
 * Result returned from ListLogs.
**/
export class ListLogsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=logNames" })
  logNames?: string[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
