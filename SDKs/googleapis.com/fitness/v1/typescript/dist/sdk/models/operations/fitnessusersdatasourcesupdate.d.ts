import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FitnessUsersDataSourcesUpdatePathParams extends SpeakeasyBase {
    dataSourceId: string;
    userId: string;
}
export declare class FitnessUsersDataSourcesUpdateQueryParams extends SpeakeasyBase {
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
export declare class FitnessUsersDataSourcesUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesUpdateSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesUpdateSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesUpdateSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesUpdateSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesUpdateSecurityOption8 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesUpdateSecurityOption9 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesUpdateSecurityOption10 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesUpdateSecurityOption11 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesUpdateSecurity extends SpeakeasyBase {
    option1?: FitnessUsersDataSourcesUpdateSecurityOption1;
    option2?: FitnessUsersDataSourcesUpdateSecurityOption2;
    option3?: FitnessUsersDataSourcesUpdateSecurityOption3;
    option4?: FitnessUsersDataSourcesUpdateSecurityOption4;
    option5?: FitnessUsersDataSourcesUpdateSecurityOption5;
    option6?: FitnessUsersDataSourcesUpdateSecurityOption6;
    option7?: FitnessUsersDataSourcesUpdateSecurityOption7;
    option8?: FitnessUsersDataSourcesUpdateSecurityOption8;
    option9?: FitnessUsersDataSourcesUpdateSecurityOption9;
    option10?: FitnessUsersDataSourcesUpdateSecurityOption10;
    option11?: FitnessUsersDataSourcesUpdateSecurityOption11;
}
export declare class FitnessUsersDataSourcesUpdateRequest extends SpeakeasyBase {
    pathParams: FitnessUsersDataSourcesUpdatePathParams;
    queryParams: FitnessUsersDataSourcesUpdateQueryParams;
    request?: shared.DataSource;
    security: FitnessUsersDataSourcesUpdateSecurity;
}
export declare class FitnessUsersDataSourcesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    dataSource?: shared.DataSource;
    statusCode: number;
}
