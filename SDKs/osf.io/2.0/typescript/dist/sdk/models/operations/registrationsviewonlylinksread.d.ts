import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistrationsViewOnlyLinksReadPathParams extends SpeakeasyBase {
    linkId: string;
    registrationId: string;
}
export declare class RegistrationsViewOnlyLinksReadRequest extends SpeakeasyBase {
    pathParams: RegistrationsViewOnlyLinksReadPathParams;
}
export declare class RegistrationsViewOnlyLinksReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
