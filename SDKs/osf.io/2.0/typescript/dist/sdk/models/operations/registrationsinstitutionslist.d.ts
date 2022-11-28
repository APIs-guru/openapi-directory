import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistrationsInstitutionsListPathParams extends SpeakeasyBase {
    registrationId: string;
}
export declare class RegistrationsInstitutionsListRequest extends SpeakeasyBase {
    pathParams: RegistrationsInstitutionsListPathParams;
}
export declare class RegistrationsInstitutionsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
