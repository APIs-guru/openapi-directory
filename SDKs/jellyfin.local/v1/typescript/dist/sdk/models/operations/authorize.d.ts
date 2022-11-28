import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizeQueryParams extends SpeakeasyBase {
    code: string;
}
export declare class AuthorizeSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class AuthorizeRequest extends SpeakeasyBase {
    queryParams: AuthorizeQueryParams;
    security: AuthorizeSecurity;
}
export declare class AuthorizeResponse extends SpeakeasyBase {
    authorize200ApplicationJsonBoolean?: boolean;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
