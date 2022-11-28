import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistrationsChildrenListPathParams extends SpeakeasyBase {
    registrationId: string;
}
export declare class RegistrationsChildrenListRequest extends SpeakeasyBase {
    pathParams: RegistrationsChildrenListPathParams;
}
export declare class RegistrationsChildrenListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
