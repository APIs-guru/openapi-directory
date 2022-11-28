import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApiKeyFromGroupPathParams extends SpeakeasyBase {
    clientId: string;
    groupId: string;
}
export declare class ApiKeyFromGroupSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class ApiKeyFromGroupRequest extends SpeakeasyBase {
    pathParams: ApiKeyFromGroupPathParams;
    security: ApiKeyFromGroupSecurity;
}
export declare class ApiKeyFromGroupResponse extends SpeakeasyBase {
    apiKey?: shared.ApiKey;
    contentType: string;
    statusCode: number;
}
