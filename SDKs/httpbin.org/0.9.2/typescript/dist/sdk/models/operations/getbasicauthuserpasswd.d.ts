import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetBasicAuthUserPasswdPathParams extends SpeakeasyBase {
    passwd: string;
    user: string;
}
export declare class GetBasicAuthUserPasswdRequest extends SpeakeasyBase {
    pathParams: GetBasicAuthUserPasswdPathParams;
}
export declare class GetBasicAuthUserPasswdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
