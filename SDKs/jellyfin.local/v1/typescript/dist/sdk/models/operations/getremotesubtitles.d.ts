import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRemoteSubtitlesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetRemoteSubtitlesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetRemoteSubtitlesRequest extends SpeakeasyBase {
    pathParams: GetRemoteSubtitlesPathParams;
    security: GetRemoteSubtitlesSecurity;
}
export declare class GetRemoteSubtitlesResponse extends SpeakeasyBase {
    contentType: string;
    getRemoteSubtitles200TextWildcardBinaryString?: Uint8Array;
    statusCode: number;
}
