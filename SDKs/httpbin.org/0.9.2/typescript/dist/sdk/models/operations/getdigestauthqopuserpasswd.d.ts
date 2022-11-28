import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDigestAuthQopUserPasswdPathParams extends SpeakeasyBase {
    passwd: string;
    qop: string;
    user: string;
}
export declare class GetDigestAuthQopUserPasswdRequest extends SpeakeasyBase {
    pathParams: GetDigestAuthQopUserPasswdPathParams;
}
export declare class GetDigestAuthQopUserPasswdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
