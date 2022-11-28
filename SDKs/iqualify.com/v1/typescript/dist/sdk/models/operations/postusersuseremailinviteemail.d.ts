import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUsersUserEmailInviteEmailPathParams extends SpeakeasyBase {
    userEmail: string;
}
export declare class PostUsersUserEmailInviteEmailRequest extends SpeakeasyBase {
    pathParams: PostUsersUserEmailInviteEmailPathParams;
}
export declare class PostUsersUserEmailInviteEmailResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
