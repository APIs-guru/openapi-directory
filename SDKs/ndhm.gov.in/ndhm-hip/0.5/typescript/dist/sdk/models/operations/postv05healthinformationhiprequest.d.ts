import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const PostV05HealthInformationHipRequestServerList: readonly ["https://your-hrp-server.com"];
export declare class PostV05HealthInformationHipRequestHeaders extends SpeakeasyBase {
    authorization: string;
    xHipId: string;
}
export declare class PostV05HealthInformationHipRequestRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    hipHealthInformationRequest?: shared.HipHealthInformationRequest;
}
export declare class PostV05HealthInformationHipRequestRequest extends SpeakeasyBase {
    serverUrl?: string;
    headers: PostV05HealthInformationHipRequestHeaders;
    request: PostV05HealthInformationHipRequestRequests;
}
export declare class PostV05HealthInformationHipRequestResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
