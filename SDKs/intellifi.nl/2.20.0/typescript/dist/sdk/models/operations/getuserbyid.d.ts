import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetUserByIdSecurity extends SpeakeasyBase {
    cookieSid: shared.SchemeCookieSid;
}
export declare class GetUserByIdRequest extends SpeakeasyBase {
    pathParams: GetUserByIdPathParams;
    security: GetUserByIdSecurity;
}
export declare class GetUserByIdResponseOutput extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.UserOutput;
}
