import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const PostV05HealthInformationTransferServerList: readonly ["https://dev.ndhm.gov.in/hiu"];
export declare class PostV05HealthInformationTransferHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class PostV05HealthInformationTransferRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    dataNotification?: shared.DataNotification;
}
export declare class PostV05HealthInformationTransferRequest extends SpeakeasyBase {
    serverUrl?: string;
    headers: PostV05HealthInformationTransferHeaders;
    request: PostV05HealthInformationTransferRequests;
}
export declare class PostV05HealthInformationTransferResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
