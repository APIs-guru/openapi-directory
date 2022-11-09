import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChangeLog } from "./changelog";


// ChangeLogsListResponse
/** 
 * Change Log List Response
**/
export class ChangeLogsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=changeLogs", elemType: shared.ChangeLog })
  changeLogs?: ChangeLog[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
