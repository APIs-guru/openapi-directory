import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetTempPasswordPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class SetTempPasswordQueryParams extends SpeakeasyBase {
    tempPassword?: string;
}
export declare class SetTempPasswordRequest extends SpeakeasyBase {
    pathParams: SetTempPasswordPathParams;
    queryParams: SetTempPasswordQueryParams;
    request?: Uint8Array;
}
export declare class SetTempPasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
