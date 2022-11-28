import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchClientValidatorPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatchClientValidatorSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class PatchClientValidatorRequest extends SpeakeasyBase {
    pathParams: PatchClientValidatorPathParams;
    request?: shared.Patch[];
    security: PatchClientValidatorSecurity;
}
export declare class PatchClientValidatorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    validationAuthority?: shared.ValidationAuthority;
}
