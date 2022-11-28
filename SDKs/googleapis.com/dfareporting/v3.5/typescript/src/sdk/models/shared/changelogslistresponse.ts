import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChangeLog } from "./changelog";



// ChangeLogsListResponse
/** 
 * Change Log List Response
**/
export class ChangeLogsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changeLogs", elemType: ChangeLog })
  changeLogs?: ChangeLog[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
