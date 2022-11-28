import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeactivateUserPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class DeactivateUserRequest extends SpeakeasyBase {
    pathParams: DeactivateUserPathParams;
    request?: Uint8Array;
}
export declare class DeactivateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
