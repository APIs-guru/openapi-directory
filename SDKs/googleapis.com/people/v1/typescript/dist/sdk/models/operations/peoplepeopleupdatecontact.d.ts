import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PeoplePeopleUpdateContactPathParams extends SpeakeasyBase {
    resourceName: string;
}
export declare enum PeoplePeopleUpdateContactSourcesEnum {
    ReadSourceTypeUnspecified = "READ_SOURCE_TYPE_UNSPECIFIED",
    ReadSourceTypeProfile = "READ_SOURCE_TYPE_PROFILE",
    ReadSourceTypeContact = "READ_SOURCE_TYPE_CONTACT",
    ReadSourceTypeDomainContact = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
}
export declare class PeoplePeopleUpdateContactQueryParams extends SpeakeasyBase {
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
    sources?: PeoplePeopleUpdateContactSourcesEnum[];
    updatePersonFields?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PeoplePeopleUpdateContactSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleUpdateContactRequest extends SpeakeasyBase {
    pathParams: PeoplePeopleUpdateContactPathParams;
    queryParams: PeoplePeopleUpdateContactQueryParams;
    request?: shared.PersonInput;
    security: PeoplePeopleUpdateContactSecurity;
}
export declare class PeoplePeopleUpdateContactResponse extends SpeakeasyBase {
    contentType: string;
    person?: shared.Person;
    statusCode: number;
}
