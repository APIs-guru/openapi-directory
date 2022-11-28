import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchGlobalJwtVerifierPathParams extends SpeakeasyBase {
    verifierId: string;
}
export declare class PatchGlobalJwtVerifierSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class PatchGlobalJwtVerifierRequest extends SpeakeasyBase {
    pathParams: PatchGlobalJwtVerifierPathParams;
    request?: shared.Patch[];
    security: PatchGlobalJwtVerifierSecurity;
}
export declare class PatchGlobalJwtVerifierResponse extends SpeakeasyBase {
    contentType: string;
    globalJwtVerifier?: shared.GlobalJwtVerifier;
    statusCode: number;
}
