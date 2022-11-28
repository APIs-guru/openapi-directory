import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FindAllGlobalJwtVerifiersSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class FindAllGlobalJwtVerifiersRequest extends SpeakeasyBase {
    security: FindAllGlobalJwtVerifiersSecurity;
}
export declare class FindAllGlobalJwtVerifiersResponse extends SpeakeasyBase {
    contentType: string;
    globalJwtVerifiers?: shared.GlobalJwtVerifier[];
    statusCode: number;
}
