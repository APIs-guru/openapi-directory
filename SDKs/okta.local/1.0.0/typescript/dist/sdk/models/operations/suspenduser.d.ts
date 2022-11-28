import { SpeakeasyBase } from "../../../internal/utils";
export declare class SuspendUserPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class SuspendUserRequest extends SpeakeasyBase {
    pathParams: SuspendUserPathParams;
    request?: Uint8Array;
}
export declare class SuspendUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
