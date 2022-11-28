import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PeoplePeopleSearchContactsSourcesEnum {
    ReadSourceTypeUnspecified = "READ_SOURCE_TYPE_UNSPECIFIED",
    ReadSourceTypeProfile = "READ_SOURCE_TYPE_PROFILE",
    ReadSourceTypeContact = "READ_SOURCE_TYPE_CONTACT",
    ReadSourceTypeDomainContact = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
}
export declare class PeoplePeopleSearchContactsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    prettyPrint?: boolean;
    query?: string;
    quotaUser?: string;
    readMask?: string;
    sources?: PeoplePeopleSearchContactsSourcesEnum[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PeoplePeopleSearchContactsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleSearchContactsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleSearchContactsSecurity extends SpeakeasyBase {
    option1?: PeoplePeopleSearchContactsSecurityOption1;
    option2?: PeoplePeopleSearchContactsSecurityOption2;
}
export declare class PeoplePeopleSearchContactsRequest extends SpeakeasyBase {
    queryParams: PeoplePeopleSearchContactsQueryParams;
    security: PeoplePeopleSearchContactsSecurity;
}
export declare class PeoplePeopleSearchContactsResponse extends SpeakeasyBase {
    contentType: string;
    searchResponse?: shared.SearchResponse;
    statusCode: number;
}
