import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const PostV05HealthInformationHiuOnRequestServerList: readonly ["https://dev.ndhm.gov.in/hiu"];
export declare class PostV05HealthInformationHiuOnRequestHeaders extends SpeakeasyBase {
    authorization: string;
    xHiuId: string;
}
export declare class PostV05HealthInformationHiuOnRequestRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    hiuHealthInformationRequestResponse?: shared.HiuHealthInformationRequestResponse;
}
export declare class PostV05HealthInformationHiuOnRequestRequest extends SpeakeasyBase {
    serverUrl?: string;
    headers: PostV05HealthInformationHiuOnRequestHeaders;
    request: PostV05HealthInformationHiuOnRequestRequests;
}
export declare class PostV05HealthInformationHiuOnRequestResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
