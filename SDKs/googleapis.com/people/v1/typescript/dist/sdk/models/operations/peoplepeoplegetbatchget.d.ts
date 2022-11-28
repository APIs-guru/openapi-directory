import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PeoplePeopleGetBatchGetSourcesEnum {
    ReadSourceTypeUnspecified = "READ_SOURCE_TYPE_UNSPECIFIED",
    ReadSourceTypeProfile = "READ_SOURCE_TYPE_PROFILE",
    ReadSourceTypeContact = "READ_SOURCE_TYPE_CONTACT",
    ReadSourceTypeDomainContact = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
}
export declare class PeoplePeopleGetBatchGetQueryParams extends SpeakeasyBase {
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
    resourceNames?: string[];
    sources?: PeoplePeopleGetBatchGetSourcesEnum[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PeoplePeopleGetBatchGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleGetBatchGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleGetBatchGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleGetBatchGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleGetBatchGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleGetBatchGetSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleGetBatchGetSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleGetBatchGetSecurityOption8 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleGetBatchGetSecurityOption9 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleGetBatchGetSecurityOption10 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleGetBatchGetSecurityOption11 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleGetBatchGetSecurity extends SpeakeasyBase {
    option1?: PeoplePeopleGetBatchGetSecurityOption1;
    option2?: PeoplePeopleGetBatchGetSecurityOption2;
    option3?: PeoplePeopleGetBatchGetSecurityOption3;
    option4?: PeoplePeopleGetBatchGetSecurityOption4;
    option5?: PeoplePeopleGetBatchGetSecurityOption5;
    option6?: PeoplePeopleGetBatchGetSecurityOption6;
    option7?: PeoplePeopleGetBatchGetSecurityOption7;
    option8?: PeoplePeopleGetBatchGetSecurityOption8;
    option9?: PeoplePeopleGetBatchGetSecurityOption9;
    option10?: PeoplePeopleGetBatchGetSecurityOption10;
    option11?: PeoplePeopleGetBatchGetSecurityOption11;
}
export declare class PeoplePeopleGetBatchGetRequest extends SpeakeasyBase {
    queryParams: PeoplePeopleGetBatchGetQueryParams;
    security: PeoplePeopleGetBatchGetSecurity;
}
export declare class PeoplePeopleGetBatchGetResponse extends SpeakeasyBase {
    contentType: string;
    getPeopleResponse?: shared.GetPeopleResponse;
    statusCode: number;
}
