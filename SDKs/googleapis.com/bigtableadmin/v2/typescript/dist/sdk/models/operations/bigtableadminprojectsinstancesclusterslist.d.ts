import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsInstancesClustersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigtableadminProjectsInstancesClustersListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BigtableadminProjectsInstancesClustersListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersListSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersListSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersListSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesClustersListSecurityOption1;
    option2?: BigtableadminProjectsInstancesClustersListSecurityOption2;
    option3?: BigtableadminProjectsInstancesClustersListSecurityOption3;
    option4?: BigtableadminProjectsInstancesClustersListSecurityOption4;
    option5?: BigtableadminProjectsInstancesClustersListSecurityOption5;
    option6?: BigtableadminProjectsInstancesClustersListSecurityOption6;
    option7?: BigtableadminProjectsInstancesClustersListSecurityOption7;
}
export declare class BigtableadminProjectsInstancesClustersListRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsInstancesClustersListPathParams;
    queryParams: BigtableadminProjectsInstancesClustersListQueryParams;
    security: BigtableadminProjectsInstancesClustersListSecurity;
}
export declare class BigtableadminProjectsInstancesClustersListResponse extends SpeakeasyBase {
    contentType: string;
    listClustersResponse?: shared.ListClustersResponse;
    statusCode: number;
}
