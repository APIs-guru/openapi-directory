import { SpeakeasyBase } from "../../../internal/utils";
export declare class UnsuspendUserPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UnsuspendUserRequest extends SpeakeasyBase {
    pathParams: UnsuspendUserPathParams;
    request?: Uint8Array;
}
export declare class UnsuspendUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
