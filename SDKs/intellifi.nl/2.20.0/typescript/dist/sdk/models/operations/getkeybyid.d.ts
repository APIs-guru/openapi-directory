import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetKeyByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetKeyByIdSecurity extends SpeakeasyBase {
    cookieSid: shared.SchemeCookieSid;
}
export declare class GetKeyByIdRequest extends SpeakeasyBase {
    pathParams: GetKeyByIdPathParams;
    security: GetKeyByIdSecurity;
}
export declare class GetKeyByIdResponse extends SpeakeasyBase {
    contentType: string;
    key?: shared.Key;
    statusCode: number;
}
