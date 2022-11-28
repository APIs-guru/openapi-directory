import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsInstancesTablesModifyColumnFamiliesPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BigtableadminProjectsInstancesTablesModifyColumnFamiliesQueryParams extends SpeakeasyBase {
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
export declare class BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption1;
    option2?: BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption2;
    option3?: BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption3;
    option4?: BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption4;
    option5?: BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption5;
}
export declare class BigtableadminProjectsInstancesTablesModifyColumnFamiliesRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsInstancesTablesModifyColumnFamiliesPathParams;
    queryParams: BigtableadminProjectsInstancesTablesModifyColumnFamiliesQueryParams;
    request?: shared.ModifyColumnFamiliesRequest;
    security: BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurity;
}
export declare class BigtableadminProjectsInstancesTablesModifyColumnFamiliesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    table?: shared.Table;
}
