import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateGlobalJwtVerifierSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class CreateGlobalJwtVerifierRequest extends SpeakeasyBase {
    request?: shared.GlobalJwtVerifier;
    security: CreateGlobalJwtVerifierSecurity;
}
export declare class CreateGlobalJwtVerifierResponse extends SpeakeasyBase {
    contentType: string;
    globalJwtVerifier?: shared.GlobalJwtVerifier;
    statusCode: number;
}
