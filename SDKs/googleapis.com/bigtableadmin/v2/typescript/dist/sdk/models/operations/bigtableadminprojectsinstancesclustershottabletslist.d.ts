import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsInstancesClustersHotTabletsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigtableadminProjectsInstancesClustersHotTabletsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    endTime?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startTime?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersHotTabletsListSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption1;
    option2?: BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption2;
    option3?: BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption3;
    option4?: BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption4;
    option5?: BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption5;
    option6?: BigtableadminProjectsInstancesClustersHotTabletsListSecurityOption6;
}
export declare class BigtableadminProjectsInstancesClustersHotTabletsListRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsInstancesClustersHotTabletsListPathParams;
    queryParams: BigtableadminProjectsInstancesClustersHotTabletsListQueryParams;
    security: BigtableadminProjectsInstancesClustersHotTabletsListSecurity;
}
export declare class BigtableadminProjectsInstancesClustersHotTabletsListResponse extends SpeakeasyBase {
    contentType: string;
    listHotTabletsResponse?: shared.ListHotTabletsResponse;
    statusCode: number;
}
