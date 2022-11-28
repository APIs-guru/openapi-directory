import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchApiKeyFromGroupPathParams extends SpeakeasyBase {
    clientId: string;
    groupId: string;
}
export declare class PatchApiKeyFromGroupSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class PatchApiKeyFromGroupRequest extends SpeakeasyBase {
    pathParams: PatchApiKeyFromGroupPathParams;
    request?: shared.Patch[];
    security: PatchApiKeyFromGroupSecurity;
}
export declare class PatchApiKeyFromGroupResponse extends SpeakeasyBase {
    apiKey?: shared.ApiKey;
    contentType: string;
    statusCode: number;
}
