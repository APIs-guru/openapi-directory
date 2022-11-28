import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05PatientsProfileOnShareHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class PostV05PatientsProfileOnShareRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    shareProfileResult?: shared.ShareProfileResult;
}
export declare class PostV05PatientsProfileOnShareRequest extends SpeakeasyBase {
    headers: PostV05PatientsProfileOnShareHeaders;
    request: PostV05PatientsProfileOnShareRequests;
}
export declare class PostV05PatientsProfileOnShareResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
