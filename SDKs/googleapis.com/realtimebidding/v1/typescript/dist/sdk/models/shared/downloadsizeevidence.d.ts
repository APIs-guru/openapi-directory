import { SpeakeasyBase } from "../../../internal/utils";
import { UrlDownloadSize } from "./urldownloadsize";
/**
 * Total download size and URL-level download size breakdown for resources in a creative.
**/
export declare class DownloadSizeEvidence extends SpeakeasyBase {
    topUrlDownloadSizeBreakdowns?: UrlDownloadSize[];
    totalDownloadSizeKb?: number;
}
