import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApiKeysFromGroupPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class ApiKeysFromGroupSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class ApiKeysFromGroupRequest extends SpeakeasyBase {
    pathParams: ApiKeysFromGroupPathParams;
    security: ApiKeysFromGroupSecurity;
}
export declare class ApiKeysFromGroupResponse extends SpeakeasyBase {
    apiKeys?: shared.ApiKey[];
    contentType: string;
    statusCode: number;
}
