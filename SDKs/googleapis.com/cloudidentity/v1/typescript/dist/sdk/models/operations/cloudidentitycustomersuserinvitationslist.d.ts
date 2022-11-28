import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityCustomersUserinvitationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudidentityCustomersUserinvitationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudidentityCustomersUserinvitationsListRequest extends SpeakeasyBase {
    pathParams: CloudidentityCustomersUserinvitationsListPathParams;
    queryParams: CloudidentityCustomersUserinvitationsListQueryParams;
}
export declare class CloudidentityCustomersUserinvitationsListResponse extends SpeakeasyBase {
    contentType: string;
    listUserInvitationsResponse?: shared.ListUserInvitationsResponse;
    statusCode: number;
}
