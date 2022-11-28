import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDigestAuthQopUserPasswdAlgorithmPathParams extends SpeakeasyBase {
    algorithm: string;
    passwd: string;
    qop: string;
    user: string;
}
export declare class GetDigestAuthQopUserPasswdAlgorithmRequest extends SpeakeasyBase {
    pathParams: GetDigestAuthQopUserPasswdAlgorithmPathParams;
}
export declare class GetDigestAuthQopUserPasswdAlgorithmResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
