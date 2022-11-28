import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActivateUserPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class ActivateUserQueryParams extends SpeakeasyBase {
    sendEmail?: string;
}
export declare class ActivateUserRequest extends SpeakeasyBase {
    pathParams: ActivateUserPathParams;
    queryParams: ActivateUserQueryParams;
    request?: Uint8Array;
}
export declare class ActivateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
