import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateApiKeyFromGroupPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class CreateApiKeyFromGroupSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class CreateApiKeyFromGroupRequest extends SpeakeasyBase {
    pathParams: CreateApiKeyFromGroupPathParams;
    request?: shared.ApiKey;
    security: CreateApiKeyFromGroupSecurity;
}
export declare class CreateApiKeyFromGroupResponse extends SpeakeasyBase {
    apiKey?: shared.ApiKey;
    contentType: string;
    statusCode: number;
}
