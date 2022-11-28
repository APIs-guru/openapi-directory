import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteGroupPathParams extends SpeakeasyBase {
    serviceGroupId: string;
}
export declare class DeleteGroupSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class DeleteGroupRequest extends SpeakeasyBase {
    pathParams: DeleteGroupPathParams;
    security: DeleteGroupSecurity;
}
export declare class DeleteGroupResponse extends SpeakeasyBase {
    contentType: string;
    deleted?: shared.Deleted;
    statusCode: number;
}
