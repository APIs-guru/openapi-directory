import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostHooksJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PostHooksJsonRequest extends SpeakeasyBase {
    queryParams: PostHooksJsonQueryParams;
    request: shared.HookEdit;
}
export declare class PostHooksJsonResponse extends SpeakeasyBase {
    contentType: string;
    hook?: shared.Hook;
    notFound?: any;
    statusCode: number;
}
