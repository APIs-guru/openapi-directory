import { SpeakeasyBase } from "../../../internal/utils";
export declare class UnlockUserPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UnlockUserRequest extends SpeakeasyBase {
    pathParams: UnlockUserPathParams;
    request?: Uint8Array;
}
export declare class UnlockUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
