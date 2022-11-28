import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHooksIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetHooksIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetHooksIdJsonRequest extends SpeakeasyBase {
    pathParams: GetHooksIdJsonPathParams;
    queryParams: GetHooksIdJsonQueryParams;
}
export declare class GetHooksIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    hook?: shared.Hook;
    notFound?: any;
    statusCode: number;
}
