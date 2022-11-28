import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCertPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteCertSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class DeleteCertRequest extends SpeakeasyBase {
    pathParams: DeleteCertPathParams;
    security: DeleteCertSecurity;
}
export declare class DeleteCertResponse extends SpeakeasyBase {
    contentType: string;
    deleted?: shared.Deleted;
    statusCode: number;
}
