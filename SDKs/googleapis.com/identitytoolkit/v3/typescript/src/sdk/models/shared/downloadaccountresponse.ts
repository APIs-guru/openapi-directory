import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserInfo } from "./userinfo";


// DownloadAccountResponse
/** 
 * Response of downloading accounts in batch.
**/
export class DownloadAccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=users", elemType: shared.UserInfo })
  users?: UserInfo[];
}
