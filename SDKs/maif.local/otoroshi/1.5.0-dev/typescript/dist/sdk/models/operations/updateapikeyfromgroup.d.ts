import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateApiKeyFromGroupPathParams extends SpeakeasyBase {
    clientId: string;
    groupId: string;
}
export declare class UpdateApiKeyFromGroupSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class UpdateApiKeyFromGroupRequest extends SpeakeasyBase {
    pathParams: UpdateApiKeyFromGroupPathParams;
    request?: shared.ApiKey;
    security: UpdateApiKeyFromGroupSecurity;
}
export declare class UpdateApiKeyFromGroupResponse extends SpeakeasyBase {
    apiKey?: shared.ApiKey;
    contentType: string;
    statusCode: number;
}
