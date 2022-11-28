import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlProjectsInstancesRescheduleMaintenancePathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlProjectsInstancesRescheduleMaintenanceQueryParams extends SpeakeasyBase {
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
export declare class SqlProjectsInstancesRescheduleMaintenanceSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlProjectsInstancesRescheduleMaintenanceSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlProjectsInstancesRescheduleMaintenanceSecurity extends SpeakeasyBase {
    option1?: SqlProjectsInstancesRescheduleMaintenanceSecurityOption1;
    option2?: SqlProjectsInstancesRescheduleMaintenanceSecurityOption2;
}
export declare class SqlProjectsInstancesRescheduleMaintenanceRequest extends SpeakeasyBase {
    pathParams: SqlProjectsInstancesRescheduleMaintenancePathParams;
    queryParams: SqlProjectsInstancesRescheduleMaintenanceQueryParams;
    request?: shared.SqlInstancesRescheduleMaintenanceRequestBody;
    security: SqlProjectsInstancesRescheduleMaintenanceSecurity;
}
export declare class SqlProjectsInstancesRescheduleMaintenanceResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
