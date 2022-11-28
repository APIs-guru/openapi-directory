import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PeopleContactGroupsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    groupFields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    syncToken?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PeopleContactGroupsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeopleContactGroupsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeopleContactGroupsListSecurity extends SpeakeasyBase {
    option1?: PeopleContactGroupsListSecurityOption1;
    option2?: PeopleContactGroupsListSecurityOption2;
}
export declare class PeopleContactGroupsListRequest extends SpeakeasyBase {
    queryParams: PeopleContactGroupsListQueryParams;
    security: PeopleContactGroupsListSecurity;
}
export declare class PeopleContactGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    listContactGroupsResponse?: shared.ListContactGroupsResponse;
    statusCode: number;
}
