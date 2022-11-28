import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05HealthInformationRequestHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class PostV05HealthInformationRequestRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    hiRequest?: shared.HiRequest;
}
export declare class PostV05HealthInformationRequestRequest extends SpeakeasyBase {
    headers: PostV05HealthInformationRequestHeaders;
    request: PostV05HealthInformationRequestRequests;
}
export declare class PostV05HealthInformationRequestResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
