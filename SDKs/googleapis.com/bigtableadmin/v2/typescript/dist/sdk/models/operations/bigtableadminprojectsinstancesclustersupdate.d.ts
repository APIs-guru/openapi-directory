import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsInstancesClustersUpdatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class BigtableadminProjectsInstancesClustersUpdateQueryParams extends SpeakeasyBase {
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
export declare class BigtableadminProjectsInstancesClustersUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersUpdateSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersUpdateSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersUpdateSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersUpdateSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesClustersUpdateSecurityOption1;
    option2?: BigtableadminProjectsInstancesClustersUpdateSecurityOption2;
    option3?: BigtableadminProjectsInstancesClustersUpdateSecurityOption3;
    option4?: BigtableadminProjectsInstancesClustersUpdateSecurityOption4;
    option5?: BigtableadminProjectsInstancesClustersUpdateSecurityOption5;
    option6?: BigtableadminProjectsInstancesClustersUpdateSecurityOption6;
}
export declare class BigtableadminProjectsInstancesClustersUpdateRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsInstancesClustersUpdatePathParams;
    queryParams: BigtableadminProjectsInstancesClustersUpdateQueryParams;
    request?: shared.ClusterInput;
    security: BigtableadminProjectsInstancesClustersUpdateSecurity;
}
export declare class BigtableadminProjectsInstancesClustersUpdateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
