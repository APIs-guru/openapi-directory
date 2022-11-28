import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApiKeyGroupPathParams extends SpeakeasyBase {
    clientId: string;
    serviceId: string;
}
export declare class ApiKeyGroupSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class ApiKeyGroupRequest extends SpeakeasyBase {
    pathParams: ApiKeyGroupPathParams;
    security: ApiKeyGroupSecurity;
}
export declare class ApiKeyGroupResponse extends SpeakeasyBase {
    contentType: string;
    group?: shared.Group;
    statusCode: number;
}
