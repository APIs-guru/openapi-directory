import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityCustomersUserinvitationsIsInvitableUserPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudidentityCustomersUserinvitationsIsInvitableUserQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudidentityCustomersUserinvitationsIsInvitableUserRequest extends SpeakeasyBase {
    pathParams: CloudidentityCustomersUserinvitationsIsInvitableUserPathParams;
    queryParams: CloudidentityCustomersUserinvitationsIsInvitableUserQueryParams;
}
export declare class CloudidentityCustomersUserinvitationsIsInvitableUserResponse extends SpeakeasyBase {
    contentType: string;
    isInvitableUserResponse?: shared.IsInvitableUserResponse;
    statusCode: number;
}
