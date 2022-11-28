import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserEmailBadgesPathParams extends SpeakeasyBase {
    userEmail: string;
}
export declare class GetUsersUserEmailBadgesRequest extends SpeakeasyBase {
    pathParams: GetUsersUserEmailBadgesPathParams;
}
export declare class GetUsersUserEmailBadgesResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    userBadges?: shared.UserBadge[];
}
