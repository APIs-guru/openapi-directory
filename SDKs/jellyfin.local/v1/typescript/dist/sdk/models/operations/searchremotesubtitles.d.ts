import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchRemoteSubtitlesPathParams extends SpeakeasyBase {
    itemId: string;
    language: string;
}
export declare class SearchRemoteSubtitlesQueryParams extends SpeakeasyBase {
    isPerfectMatch?: boolean;
}
export declare class SearchRemoteSubtitlesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SearchRemoteSubtitlesRequest extends SpeakeasyBase {
    pathParams: SearchRemoteSubtitlesPathParams;
    queryParams: SearchRemoteSubtitlesQueryParams;
    security: SearchRemoteSubtitlesSecurity;
}
export declare class SearchRemoteSubtitlesResponse extends SpeakeasyBase {
    contentType: string;
    remoteSubtitleInfos?: shared.RemoteSubtitleInfo[];
    statusCode: number;
}
