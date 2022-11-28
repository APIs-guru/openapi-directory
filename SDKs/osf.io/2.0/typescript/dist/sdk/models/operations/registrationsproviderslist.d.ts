import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistrationsProvidersListPathParams extends SpeakeasyBase {
    registrationId: string;
}
export declare class RegistrationsProvidersListRequest extends SpeakeasyBase {
    pathParams: RegistrationsProvidersListPathParams;
}
export declare class RegistrationsProvidersListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
