import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05CareContextsOnDiscoverHeaders extends SpeakeasyBase {
    authorization: string;
    xCmId: string;
}
export declare class PostV05CareContextsOnDiscoverRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    patientDiscoveryResult?: shared.PatientDiscoveryResult;
}
export declare class PostV05CareContextsOnDiscoverRequest extends SpeakeasyBase {
    headers: PostV05CareContextsOnDiscoverHeaders;
    request: PostV05CareContextsOnDiscoverRequests;
}
export declare class PostV05CareContextsOnDiscoverResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
