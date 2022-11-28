import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FindAllClientValidatorsSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class FindAllClientValidatorsRequest extends SpeakeasyBase {
    security: FindAllClientValidatorsSecurity;
}
export declare class FindAllClientValidatorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    validationAuthorities?: shared.ValidationAuthority[];
}
