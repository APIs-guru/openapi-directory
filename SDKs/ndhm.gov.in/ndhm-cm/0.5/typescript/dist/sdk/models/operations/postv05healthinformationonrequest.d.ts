import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05HealthInformationOnRequestHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class PostV05HealthInformationOnRequestRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    hipHealthInformationRequestAcknowledgement?: shared.HipHealthInformationRequestAcknowledgement;
}
export declare class PostV05HealthInformationOnRequestRequest extends SpeakeasyBase {
    headers: PostV05HealthInformationOnRequestHeaders;
    request: PostV05HealthInformationOnRequestRequests;
}
export declare class PostV05HealthInformationOnRequestResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
