import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV05HealthInformationNotifyHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class PostV05HealthInformationNotifyRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    healthInformationNotification?: shared.HealthInformationNotification;
}
export declare class PostV05HealthInformationNotifyRequest extends SpeakeasyBase {
    headers: PostV05HealthInformationNotifyHeaders;
    request: PostV05HealthInformationNotifyRequests;
}
export declare class PostV05HealthInformationNotifyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
