import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserEmailPathParams extends SpeakeasyBase {
    userEmail: string;
}
export declare class GetUsersUserEmailRequest extends SpeakeasyBase {
    pathParams: GetUsersUserEmailPathParams;
}
export declare class GetUsersUserEmailResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    userResponse?: shared.UserResponse;
}
