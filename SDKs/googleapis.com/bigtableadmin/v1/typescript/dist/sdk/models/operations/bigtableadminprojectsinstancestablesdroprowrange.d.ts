import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsInstancesTablesDropRowRangePathParams extends SpeakeasyBase {
    name: string;
}
export declare class BigtableadminProjectsInstancesTablesDropRowRangeQueryParams extends SpeakeasyBase {
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
export declare class BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesDropRowRangeSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption1;
    option2?: BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption2;
    option3?: BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption3;
    option4?: BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption4;
    option5?: BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption5;
}
export declare class BigtableadminProjectsInstancesTablesDropRowRangeRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsInstancesTablesDropRowRangePathParams;
    queryParams: BigtableadminProjectsInstancesTablesDropRowRangeQueryParams;
    request?: shared.DropRowRangeRequest;
    security: BigtableadminProjectsInstancesTablesDropRowRangeSecurity;
}
export declare class BigtableadminProjectsInstancesTablesDropRowRangeResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
