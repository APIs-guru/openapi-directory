import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistrationsContributorsReadPathParams extends SpeakeasyBase {
    registrationId: string;
    userId: string;
}
export declare class RegistrationsContributorsReadRequest extends SpeakeasyBase {
    pathParams: RegistrationsContributorsReadPathParams;
}
export declare class RegistrationsContributorsReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
