import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteGlobalJwtVerifierPathParams extends SpeakeasyBase {
    verifierId: string;
}
export declare class DeleteGlobalJwtVerifierSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class DeleteGlobalJwtVerifierRequest extends SpeakeasyBase {
    pathParams: DeleteGlobalJwtVerifierPathParams;
    security: DeleteGlobalJwtVerifierSecurity;
}
export declare class DeleteGlobalJwtVerifierResponse extends SpeakeasyBase {
    contentType: string;
    deleted?: shared.Deleted;
    statusCode: number;
}
