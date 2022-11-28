import { SpeakeasyBase } from "../../../internal/utils";
import { ConcurrentAccessRestriction } from "./concurrentaccessrestriction";
import { DownloadAccessRestriction } from "./downloadaccessrestriction";
export declare class RequestAccessData extends SpeakeasyBase {
    concurrentAccess?: ConcurrentAccessRestriction;
    downloadAccess?: DownloadAccessRestriction;
    kind?: string;
}
