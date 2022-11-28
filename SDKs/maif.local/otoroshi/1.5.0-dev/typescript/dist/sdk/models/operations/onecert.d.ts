import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OneCertPathParams extends SpeakeasyBase {
    id: string;
}
export declare class OneCertSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class OneCertRequest extends SpeakeasyBase {
    pathParams: OneCertPathParams;
    security: OneCertSecurity;
}
export declare class OneCertResponse extends SpeakeasyBase {
    certificate?: shared.Certificate;
    contentType: string;
    statusCode: number;
}
