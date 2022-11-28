import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteClientValidatorPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteClientValidatorSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class DeleteClientValidatorRequest extends SpeakeasyBase {
    pathParams: DeleteClientValidatorPathParams;
    security: DeleteClientValidatorSecurity;
}
export declare class DeleteClientValidatorResponse extends SpeakeasyBase {
    contentType: string;
    deleted?: shared.Deleted;
    statusCode: number;
}
