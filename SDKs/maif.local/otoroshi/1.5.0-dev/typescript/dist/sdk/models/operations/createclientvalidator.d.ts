import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateClientValidatorSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class CreateClientValidatorRequest extends SpeakeasyBase {
    request?: shared.ValidationAuthority;
    security: CreateClientValidatorSecurity;
}
export declare class CreateClientValidatorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    validationAuthority?: shared.ValidationAuthority;
}
