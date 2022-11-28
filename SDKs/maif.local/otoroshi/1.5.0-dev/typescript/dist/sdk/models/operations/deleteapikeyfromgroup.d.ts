import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteApiKeyFromGroupPathParams extends SpeakeasyBase {
    clientId: string;
    groupId: string;
}
export declare class DeleteApiKeyFromGroupSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class DeleteApiKeyFromGroupRequest extends SpeakeasyBase {
    pathParams: DeleteApiKeyFromGroupPathParams;
    security: DeleteApiKeyFromGroupSecurity;
}
export declare class DeleteApiKeyFromGroupResponse extends SpeakeasyBase {
    contentType: string;
    deleted?: shared.Deleted;
    statusCode: number;
}
