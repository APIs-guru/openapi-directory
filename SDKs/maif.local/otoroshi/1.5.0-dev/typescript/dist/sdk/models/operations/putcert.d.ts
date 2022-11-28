import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCertPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutCertSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class PutCertRequest extends SpeakeasyBase {
    pathParams: PutCertPathParams;
    request?: shared.Certificate;
    security: PutCertSecurity;
}
export declare class PutCertResponse extends SpeakeasyBase {
    certificate?: shared.Certificate;
    contentType: string;
    statusCode: number;
}
