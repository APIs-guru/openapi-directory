import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FitnessUsersDataSourcesDeletePathParams extends SpeakeasyBase {
    dataSourceId: string;
    userId: string;
}
export declare class FitnessUsersDataSourcesDeleteQueryParams extends SpeakeasyBase {
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
export declare class FitnessUsersDataSourcesDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesDeleteSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesDeleteSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesDeleteSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesDeleteSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesDeleteSecurityOption8 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesDeleteSecurityOption9 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesDeleteSecurityOption10 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesDeleteSecurityOption11 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesDeleteSecurity extends SpeakeasyBase {
    option1?: FitnessUsersDataSourcesDeleteSecurityOption1;
    option2?: FitnessUsersDataSourcesDeleteSecurityOption2;
    option3?: FitnessUsersDataSourcesDeleteSecurityOption3;
    option4?: FitnessUsersDataSourcesDeleteSecurityOption4;
    option5?: FitnessUsersDataSourcesDeleteSecurityOption5;
    option6?: FitnessUsersDataSourcesDeleteSecurityOption6;
    option7?: FitnessUsersDataSourcesDeleteSecurityOption7;
    option8?: FitnessUsersDataSourcesDeleteSecurityOption8;
    option9?: FitnessUsersDataSourcesDeleteSecurityOption9;
    option10?: FitnessUsersDataSourcesDeleteSecurityOption10;
    option11?: FitnessUsersDataSourcesDeleteSecurityOption11;
}
export declare class FitnessUsersDataSourcesDeleteRequest extends SpeakeasyBase {
    pathParams: FitnessUsersDataSourcesDeletePathParams;
    queryParams: FitnessUsersDataSourcesDeleteQueryParams;
    security: FitnessUsersDataSourcesDeleteSecurity;
}
export declare class FitnessUsersDataSourcesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    dataSource?: shared.DataSource;
    statusCode: number;
}
