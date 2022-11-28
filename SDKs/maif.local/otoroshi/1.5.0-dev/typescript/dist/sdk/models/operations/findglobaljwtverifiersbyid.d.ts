import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FindGlobalJwtVerifiersByIdPathParams extends SpeakeasyBase {
    verifierId: string;
}
export declare class FindGlobalJwtVerifiersByIdSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class FindGlobalJwtVerifiersByIdRequest extends SpeakeasyBase {
    pathParams: FindGlobalJwtVerifiersByIdPathParams;
    security: FindGlobalJwtVerifiersByIdSecurity;
}
export declare class FindGlobalJwtVerifiersByIdResponse extends SpeakeasyBase {
    contentType: string;
    globalJwtVerifier?: shared.GlobalJwtVerifier;
    statusCode: number;
}
