import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const PostV05PatientsProfileShareServerList: readonly ["https://your-hrp-server.com"];
export declare class PostV05PatientsProfileShareHeaders extends SpeakeasyBase {
    authorization: string;
    xHipId: string;
}
export declare class PostV05PatientsProfileShareRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    shareProfileRequest?: shared.ShareProfileRequest;
}
export declare class PostV05PatientsProfileShareRequest extends SpeakeasyBase {
    serverUrl?: string;
    headers: PostV05PatientsProfileShareHeaders;
    request: PostV05PatientsProfileShareRequests;
}
export declare class PostV05PatientsProfileShareResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
