import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistrationsReadPathParams extends SpeakeasyBase {
    registrationId: string;
}
export declare class RegistrationsReadRequest extends SpeakeasyBase {
    pathParams: RegistrationsReadPathParams;
}
export declare class RegistrationsReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
