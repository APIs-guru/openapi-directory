import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUsersUserEmailSuspendPathParams extends SpeakeasyBase {
    userEmail: string;
}
export declare class PutUsersUserEmailSuspendRequest extends SpeakeasyBase {
    pathParams: PutUsersUserEmailSuspendPathParams;
    request: shared.SuspendedRequest;
}
export declare class PutUsersUserEmailSuspendResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
