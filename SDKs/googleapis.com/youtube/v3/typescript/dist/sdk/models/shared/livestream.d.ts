import { SpeakeasyBase } from "../../../internal/utils";
import { CdnSettings } from "./cdnsettings";
import { LiveStreamContentDetails } from "./livestreamcontentdetails";
import { LiveStreamSnippet } from "./livestreamsnippet";
import { LiveStreamStatus } from "./livestreamstatus";
/**
 * A live stream describes a live ingestion point.
**/
export declare class LiveStream extends SpeakeasyBase {
    cdn?: CdnSettings;
    contentDetails?: LiveStreamContentDetails;
    etag?: string;
    id?: string;
    kind?: string;
    snippet?: LiveStreamSnippet;
    status?: LiveStreamStatus;
}
