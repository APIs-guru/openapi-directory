import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PeoplePeopleGetPathParams extends SpeakeasyBase {
    resourceName: string;
}
export declare enum PeoplePeopleGetSourcesEnum {
    ReadSourceTypeUnspecified = "READ_SOURCE_TYPE_UNSPECIFIED",
    ReadSourceTypeProfile = "READ_SOURCE_TYPE_PROFILE",
    ReadSourceTypeContact = "READ_SOURCE_TYPE_CONTACT",
    ReadSourceTypeDomainContact = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
}
export declare class PeoplePeopleGetQueryParams extends SpeakeasyBase {
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
    requestMaskIncludeField?: string;
    sources?: PeoplePeopleGetSourcesEnum[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PeoplePeopleGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleGetSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleGetSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleGetSecurityOption8 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleGetSecurityOption9 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleGetSecurityOption10 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleGetSecurityOption11 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleGetSecurity extends SpeakeasyBase {
    option1?: PeoplePeopleGetSecurityOption1;
    option2?: PeoplePeopleGetSecurityOption2;
    option3?: PeoplePeopleGetSecurityOption3;
    option4?: PeoplePeopleGetSecurityOption4;
    option5?: PeoplePeopleGetSecurityOption5;
    option6?: PeoplePeopleGetSecurityOption6;
    option7?: PeoplePeopleGetSecurityOption7;
    option8?: PeoplePeopleGetSecurityOption8;
    option9?: PeoplePeopleGetSecurityOption9;
    option10?: PeoplePeopleGetSecurityOption10;
    option11?: PeoplePeopleGetSecurityOption11;
}
export declare class PeoplePeopleGetRequest extends SpeakeasyBase {
    pathParams: PeoplePeopleGetPathParams;
    queryParams: PeoplePeopleGetQueryParams;
    security: PeoplePeopleGetSecurity;
}
export declare class PeoplePeopleGetResponse extends SpeakeasyBase {
    contentType: string;
    person?: shared.Person;
    statusCode: number;
}
