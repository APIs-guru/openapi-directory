import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchUsersUserEmailPathParams extends SpeakeasyBase {
    userEmail: string;
}
export declare class PatchUsersUserEmailRequest extends SpeakeasyBase {
    pathParams: PatchUsersUserEmailPathParams;
    request?: shared.User;
}
export declare class PatchUsersUserEmailResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    userResponse?: shared.UserResponse;
}
