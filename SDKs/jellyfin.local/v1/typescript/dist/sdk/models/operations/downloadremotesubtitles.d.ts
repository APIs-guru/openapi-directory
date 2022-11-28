import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DownloadRemoteSubtitlesPathParams extends SpeakeasyBase {
    itemId: string;
    subtitleId: string;
}
export declare class DownloadRemoteSubtitlesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class DownloadRemoteSubtitlesRequest extends SpeakeasyBase {
    pathParams: DownloadRemoteSubtitlesPathParams;
    security: DownloadRemoteSubtitlesSecurity;
}
export declare class DownloadRemoteSubtitlesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
