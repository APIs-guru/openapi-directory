import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05HealthInformationCmOnRequestHeaders extends SpeakeasyBase {
    authorization: string;
    xHiuId: string;
}
export declare class PostV05HealthInformationCmOnRequestRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    hiuHealthInformationRequestResponse?: shared.HiuHealthInformationRequestResponse;
}
export declare class PostV05HealthInformationCmOnRequestRequest extends SpeakeasyBase {
    headers: PostV05HealthInformationCmOnRequestHeaders;
    request: PostV05HealthInformationCmOnRequestRequests;
}
export declare class PostV05HealthInformationCmOnRequestResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
