import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PeopleOtherContactsListSourcesEnum {
    ReadSourceTypeUnspecified = "READ_SOURCE_TYPE_UNSPECIFIED",
    ReadSourceTypeProfile = "READ_SOURCE_TYPE_PROFILE",
    ReadSourceTypeContact = "READ_SOURCE_TYPE_CONTACT",
    ReadSourceTypeDomainContact = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
}
export declare class PeopleOtherContactsListQueryParams extends SpeakeasyBase {
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
    readMask?: string;
    requestSyncToken?: boolean;
    sources?: PeopleOtherContactsListSourcesEnum[];
    syncToken?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PeopleOtherContactsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeopleOtherContactsListRequest extends SpeakeasyBase {
    queryParams: PeopleOtherContactsListQueryParams;
    security: PeopleOtherContactsListSecurity;
}
export declare class PeopleOtherContactsListResponse extends SpeakeasyBase {
    contentType: string;
    listOtherContactsResponse?: shared.ListOtherContactsResponse;
    statusCode: number;
}
