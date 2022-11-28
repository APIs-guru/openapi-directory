import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PeoplePeopleConnectionsListPathParams extends SpeakeasyBase {
    resourceName: string;
}
export declare enum PeoplePeopleConnectionsListSortOrderEnum {
    LastModifiedAscending = "LAST_MODIFIED_ASCENDING",
    LastModifiedDescending = "LAST_MODIFIED_DESCENDING",
    FirstNameAscending = "FIRST_NAME_ASCENDING",
    LastNameAscending = "LAST_NAME_ASCENDING"
}
export declare enum PeoplePeopleConnectionsListSourcesEnum {
    ReadSourceTypeUnspecified = "READ_SOURCE_TYPE_UNSPECIFIED",
    ReadSourceTypeProfile = "READ_SOURCE_TYPE_PROFILE",
    ReadSourceTypeContact = "READ_SOURCE_TYPE_CONTACT",
    ReadSourceTypeDomainContact = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
}
export declare class PeoplePeopleConnectionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    personFields?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestMaskIncludeField?: string;
    requestSyncToken?: boolean;
    sortOrder?: PeoplePeopleConnectionsListSortOrderEnum;
    sources?: PeoplePeopleConnectionsListSourcesEnum[];
    syncToken?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PeoplePeopleConnectionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleConnectionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleConnectionsListSecurity extends SpeakeasyBase {
    option1?: PeoplePeopleConnectionsListSecurityOption1;
    option2?: PeoplePeopleConnectionsListSecurityOption2;
}
export declare class PeoplePeopleConnectionsListRequest extends SpeakeasyBase {
    pathParams: PeoplePeopleConnectionsListPathParams;
    queryParams: PeoplePeopleConnectionsListQueryParams;
    security: PeoplePeopleConnectionsListSecurity;
}
export declare class PeoplePeopleConnectionsListResponse extends SpeakeasyBase {
    contentType: string;
    listConnectionsResponse?: shared.ListConnectionsResponse;
    statusCode: number;
}
