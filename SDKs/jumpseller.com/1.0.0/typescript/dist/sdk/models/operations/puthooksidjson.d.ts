import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutHooksIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutHooksIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PutHooksIdJsonRequest extends SpeakeasyBase {
    pathParams: PutHooksIdJsonPathParams;
    queryParams: PutHooksIdJsonQueryParams;
    request: shared.HookEdit;
}
export declare class PutHooksIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    hook?: shared.Hook;
    notFound?: any;
    statusCode: number;
}
