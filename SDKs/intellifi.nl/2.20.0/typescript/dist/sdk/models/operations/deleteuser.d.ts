import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteUserPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteUserSecurity extends SpeakeasyBase {
    cookieSid: shared.SchemeCookieSid;
}
export declare class DeleteUserRequest extends SpeakeasyBase {
    pathParams: DeleteUserPathParams;
    security: DeleteUserSecurity;
}
export declare class DeleteUserResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
