import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsInstancesTablesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum BigtableadminProjectsInstancesTablesListViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    NameOnly = "NAME_ONLY",
    SchemaView = "SCHEMA_VIEW",
    ReplicationView = "REPLICATION_VIEW",
    EncryptionView = "ENCRYPTION_VIEW",
    StatsView = "STATS_VIEW",
    Full = "FULL"
}
export declare class BigtableadminProjectsInstancesTablesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: BigtableadminProjectsInstancesTablesListViewEnum;
}
export declare class BigtableadminProjectsInstancesTablesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesListSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesListSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesTablesListSecurityOption1;
    option2?: BigtableadminProjectsInstancesTablesListSecurityOption2;
    option3?: BigtableadminProjectsInstancesTablesListSecurityOption3;
    option4?: BigtableadminProjectsInstancesTablesListSecurityOption4;
    option5?: BigtableadminProjectsInstancesTablesListSecurityOption5;
    option6?: BigtableadminProjectsInstancesTablesListSecurityOption6;
}
export declare class BigtableadminProjectsInstancesTablesListRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsInstancesTablesListPathParams;
    queryParams: BigtableadminProjectsInstancesTablesListQueryParams;
    security: BigtableadminProjectsInstancesTablesListSecurity;
}
export declare class BigtableadminProjectsInstancesTablesListResponse extends SpeakeasyBase {
    contentType: string;
    listTablesResponse?: shared.ListTablesResponse;
    statusCode: number;
}
