import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteUserPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class DeleteUserSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class DeleteUserRequest extends SpeakeasyBase {
    pathParams: DeleteUserPathParams;
    security: DeleteUserSecurity;
}
export declare class DeleteUserResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
