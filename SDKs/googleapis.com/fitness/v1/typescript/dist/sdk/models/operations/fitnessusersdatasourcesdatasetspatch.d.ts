import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FitnessUsersDataSourcesDatasetsPatchPathParams extends SpeakeasyBase {
    dataSourceId: string;
    datasetId: string;
    userId: string;
}
export declare class FitnessUsersDataSourcesDatasetsPatchQueryParams extends SpeakeasyBase {
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
export declare class FitnessUsersDataSourcesDatasetsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesDatasetsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesDatasetsPatchSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesDatasetsPatchSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesDatasetsPatchSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesDatasetsPatchSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesDatasetsPatchSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesDatasetsPatchSecurityOption8 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesDatasetsPatchSecurityOption9 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesDatasetsPatchSecurityOption10 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesDatasetsPatchSecurityOption11 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FitnessUsersDataSourcesDatasetsPatchSecurity extends SpeakeasyBase {
    option1?: FitnessUsersDataSourcesDatasetsPatchSecurityOption1;
    option2?: FitnessUsersDataSourcesDatasetsPatchSecurityOption2;
    option3?: FitnessUsersDataSourcesDatasetsPatchSecurityOption3;
    option4?: FitnessUsersDataSourcesDatasetsPatchSecurityOption4;
    option5?: FitnessUsersDataSourcesDatasetsPatchSecurityOption5;
    option6?: FitnessUsersDataSourcesDatasetsPatchSecurityOption6;
    option7?: FitnessUsersDataSourcesDatasetsPatchSecurityOption7;
    option8?: FitnessUsersDataSourcesDatasetsPatchSecurityOption8;
    option9?: FitnessUsersDataSourcesDatasetsPatchSecurityOption9;
    option10?: FitnessUsersDataSourcesDatasetsPatchSecurityOption10;
    option11?: FitnessUsersDataSourcesDatasetsPatchSecurityOption11;
}
export declare class FitnessUsersDataSourcesDatasetsPatchRequest extends SpeakeasyBase {
    pathParams: FitnessUsersDataSourcesDatasetsPatchPathParams;
    queryParams: FitnessUsersDataSourcesDatasetsPatchQueryParams;
    request?: shared.Dataset;
    security: FitnessUsersDataSourcesDatasetsPatchSecurity;
}
export declare class FitnessUsersDataSourcesDatasetsPatchResponse extends SpeakeasyBase {
    contentType: string;
    dataset?: shared.Dataset;
    statusCode: number;
}
