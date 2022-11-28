import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchCertPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatchCertSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class PatchCertRequest extends SpeakeasyBase {
    pathParams: PatchCertPathParams;
    request?: shared.Patch[];
    security: PatchCertSecurity;
}
export declare class PatchCertResponse extends SpeakeasyBase {
    certificate?: shared.Certificate;
    contentType: string;
    statusCode: number;
}
