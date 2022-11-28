import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const PostV05CareContextsDiscoverServerList: readonly ["https://your-hrp-server.com"];
export declare class PostV05CareContextsDiscoverHeaders extends SpeakeasyBase {
    authorization: string;
    xHipId: string;
}
export declare class PostV05CareContextsDiscoverRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    patientDiscoveryRequest?: shared.PatientDiscoveryRequest;
}
export declare class PostV05CareContextsDiscoverRequest extends SpeakeasyBase {
    serverUrl?: string;
    headers: PostV05CareContextsDiscoverHeaders;
    request: PostV05CareContextsDiscoverRequests;
}
export declare class PostV05CareContextsDiscoverResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
