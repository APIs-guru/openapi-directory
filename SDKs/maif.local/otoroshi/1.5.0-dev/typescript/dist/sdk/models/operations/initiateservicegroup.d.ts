import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InitiateServiceGroupSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class InitiateServiceGroupRequest extends SpeakeasyBase {
    security: InitiateServiceGroupSecurity;
}
export declare class InitiateServiceGroupResponse extends SpeakeasyBase {
    contentType: string;
    group?: shared.Group;
    statusCode: number;
}
