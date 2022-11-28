import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecuritycenterProjectsNotificationConfigsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SecuritycenterProjectsNotificationConfigsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SecuritycenterProjectsNotificationConfigsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterProjectsNotificationConfigsListRequest extends SpeakeasyBase {
    pathParams: SecuritycenterProjectsNotificationConfigsListPathParams;
    queryParams: SecuritycenterProjectsNotificationConfigsListQueryParams;
    security: SecuritycenterProjectsNotificationConfigsListSecurity;
}
export declare class SecuritycenterProjectsNotificationConfigsListResponse extends SpeakeasyBase {
    contentType: string;
    listNotificationConfigsResponse?: shared.ListNotificationConfigsResponse;
    statusCode: number;
}
