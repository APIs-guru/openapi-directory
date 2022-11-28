import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateClientValidatorPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateClientValidatorSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class UpdateClientValidatorRequest extends SpeakeasyBase {
    pathParams: UpdateClientValidatorPathParams;
    request?: shared.ValidationAuthority;
    security: UpdateClientValidatorSecurity;
}
export declare class UpdateClientValidatorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    validationAuthority?: shared.ValidationAuthority;
}
