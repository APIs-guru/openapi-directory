import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PlusPeopleGetPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class PlusPeopleGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class PlusPeopleGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PlusPeopleGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PlusPeopleGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PlusPeopleGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PlusPeopleGetSecurity extends SpeakeasyBase {
    option1?: PlusPeopleGetSecurityOption1;
    option2?: PlusPeopleGetSecurityOption2;
    option3?: PlusPeopleGetSecurityOption3;
    option4?: PlusPeopleGetSecurityOption4;
}
export declare class PlusPeopleGetRequest extends SpeakeasyBase {
    pathParams: PlusPeopleGetPathParams;
    queryParams: PlusPeopleGetQueryParams;
    security: PlusPeopleGetSecurity;
}
export declare class PlusPeopleGetResponse extends SpeakeasyBase {
    contentType: string;
    person?: shared.Person;
    statusCode: number;
}
