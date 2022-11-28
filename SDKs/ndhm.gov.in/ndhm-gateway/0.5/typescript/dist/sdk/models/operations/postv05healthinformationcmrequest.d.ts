import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05HealthInformationCmRequestHeaders extends SpeakeasyBase {
    authorization: string;
    xCmId: string;
}
export declare class PostV05HealthInformationCmRequestRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    hiRequest?: shared.HiRequest;
}
export declare class PostV05HealthInformationCmRequestRequest extends SpeakeasyBase {
    headers: PostV05HealthInformationCmRequestHeaders;
    request: PostV05HealthInformationCmRequestRequests;
}
export declare class PostV05HealthInformationCmRequestResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
