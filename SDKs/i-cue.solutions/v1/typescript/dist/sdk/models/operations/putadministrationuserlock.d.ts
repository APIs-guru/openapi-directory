import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutAdministrationUserLockHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PutAdministrationUserLockRequests extends SpeakeasyBase {
    toggleUserRequest?: shared.ToggleUserRequest;
    toggleUserRequest1?: shared.ToggleUserRequest;
    toggleUserRequest2?: shared.ToggleUserRequest;
}
export declare class PutAdministrationUserLockRequest extends SpeakeasyBase {
    headers: PutAdministrationUserLockHeaders;
    request?: PutAdministrationUserLockRequests;
}
export declare class PutAdministrationUserLockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
