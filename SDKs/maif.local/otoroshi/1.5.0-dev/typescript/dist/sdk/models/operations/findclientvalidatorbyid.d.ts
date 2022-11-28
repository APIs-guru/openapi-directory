import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FindClientValidatorByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class FindClientValidatorByIdSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class FindClientValidatorByIdRequest extends SpeakeasyBase {
    pathParams: FindClientValidatorByIdPathParams;
    security: FindClientValidatorByIdSecurity;
}
export declare class FindClientValidatorByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    validationAuthority?: shared.ValidationAuthority;
}
