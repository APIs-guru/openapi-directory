import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostRequest extends SpeakeasyBase {
    request: shared.Request;
    security: PostSecurity;
}
export declare class PostResponse extends SpeakeasyBase {
    contentType: string;
    response?: shared.Response;
    statusCode: number;
}
