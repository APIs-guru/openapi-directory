import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGlobalJwtVerifierPathParams extends SpeakeasyBase {
    verifierId: string;
}
export declare class UpdateGlobalJwtVerifierSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class UpdateGlobalJwtVerifierRequest extends SpeakeasyBase {
    pathParams: UpdateGlobalJwtVerifierPathParams;
    request?: shared.GlobalJwtVerifier;
    security: UpdateGlobalJwtVerifierSecurity;
}
export declare class UpdateGlobalJwtVerifierResponse extends SpeakeasyBase {
    contentType: string;
    globalJwtVerifier?: shared.GlobalJwtVerifier;
    statusCode: number;
}
