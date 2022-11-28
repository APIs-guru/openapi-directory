import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FitnessUsersDataSourcesCreatePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class FitnessUsersDataSourcesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FitnessUsersDataSourcesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesCreateSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesCreateSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesCreateSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesCreateSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesCreateSecurityOption8 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesCreateSecurityOption9 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesCreateSecurityOption10 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesCreateSecurityOption11 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesCreateSecurity extends SpeakeasyBase {
    option1?: FitnessUsersDataSourcesCreateSecurityOption1;
    option2?: FitnessUsersDataSourcesCreateSecurityOption2;
    option3?: FitnessUsersDataSourcesCreateSecurityOption3;
    option4?: FitnessUsersDataSourcesCreateSecurityOption4;
    option5?: FitnessUsersDataSourcesCreateSecurityOption5;
    option6?: FitnessUsersDataSourcesCreateSecurityOption6;
    option7?: FitnessUsersDataSourcesCreateSecurityOption7;
    option8?: FitnessUsersDataSourcesCreateSecurityOption8;
    option9?: FitnessUsersDataSourcesCreateSecurityOption9;
    option10?: FitnessUsersDataSourcesCreateSecurityOption10;
    option11?: FitnessUsersDataSourcesCreateSecurityOption11;
}
export declare class FitnessUsersDataSourcesCreateRequest extends SpeakeasyBase {
    pathParams: FitnessUsersDataSourcesCreatePathParams;
    queryParams: FitnessUsersDataSourcesCreateQueryParams;
    request?: shared.DataSource;
    security: FitnessUsersDataSourcesCreateSecurity;
}
export declare class FitnessUsersDataSourcesCreateResponse extends SpeakeasyBase {
    contentType: string;
    dataSource?: shared.DataSource;
    statusCode: number;
}
