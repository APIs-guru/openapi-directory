import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PeoplePeopleCreateContactSourcesEnum {
    ReadSourceTypeUnspecified = "READ_SOURCE_TYPE_UNSPECIFIED",
    ReadSourceTypeProfile = "READ_SOURCE_TYPE_PROFILE",
    ReadSourceTypeContact = "READ_SOURCE_TYPE_CONTACT",
    ReadSourceTypeDomainContact = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
}
export declare class PeoplePeopleCreateContactQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    personFields?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sources?: PeoplePeopleCreateContactSourcesEnum[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PeoplePeopleCreateContactSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleCreateContactRequest extends SpeakeasyBase {
    queryParams: PeoplePeopleCreateContactQueryParams;
    request?: shared.PersonInput;
    security: PeoplePeopleCreateContactSecurity;
}
export declare class PeoplePeopleCreateContactResponse extends SpeakeasyBase {
    contentType: string;
    person?: shared.Person;
    statusCode: number;
}
