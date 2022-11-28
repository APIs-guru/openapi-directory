import { SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
/**
 * Response of downloading accounts in batch.
**/
export declare class DownloadAccountResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    users?: UserInfo[];
}
