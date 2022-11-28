import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceGroupPathParams extends SpeakeasyBase {
    serviceGroupId: string;
}
export declare class ServiceGroupSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class ServiceGroupRequest extends SpeakeasyBase {
    pathParams: ServiceGroupPathParams;
    security: ServiceGroupSecurity;
}
export declare class ServiceGroupResponse extends SpeakeasyBase {
    contentType: string;
    group?: shared.Group;
    statusCode: number;
}
