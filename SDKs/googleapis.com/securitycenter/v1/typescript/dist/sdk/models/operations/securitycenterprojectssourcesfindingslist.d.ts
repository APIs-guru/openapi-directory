import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecuritycenterProjectsSourcesFindingsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SecuritycenterProjectsSourcesFindingsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    compareDuration?: string;
    fieldMask?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readTime?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SecuritycenterProjectsSourcesFindingsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterProjectsSourcesFindingsListRequest extends SpeakeasyBase {
    pathParams: SecuritycenterProjectsSourcesFindingsListPathParams;
    queryParams: SecuritycenterProjectsSourcesFindingsListQueryParams;
    security: SecuritycenterProjectsSourcesFindingsListSecurity;
}
export declare class SecuritycenterProjectsSourcesFindingsListResponse extends SpeakeasyBase {
    contentType: string;
    listFindingsResponse?: shared.ListFindingsResponse;
    statusCode: number;
}
