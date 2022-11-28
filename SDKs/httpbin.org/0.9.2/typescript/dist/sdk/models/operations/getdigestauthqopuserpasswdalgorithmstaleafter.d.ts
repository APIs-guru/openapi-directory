import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDigestAuthQopUserPasswdAlgorithmStaleAfterPathParams extends SpeakeasyBase {
    algorithm: string;
    passwd: string;
    qop: string;
    staleAfter: string;
    user: string;
}
export declare class GetDigestAuthQopUserPasswdAlgorithmStaleAfterRequest extends SpeakeasyBase {
    pathParams: GetDigestAuthQopUserPasswdAlgorithmStaleAfterPathParams;
}
export declare class GetDigestAuthQopUserPasswdAlgorithmStaleAfterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
