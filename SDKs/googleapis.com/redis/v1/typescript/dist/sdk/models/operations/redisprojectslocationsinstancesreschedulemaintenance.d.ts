import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RedisProjectsLocationsInstancesRescheduleMaintenancePathParams extends SpeakeasyBase {
    name: string;
}
export declare class RedisProjectsLocationsInstancesRescheduleMaintenanceQueryParams extends SpeakeasyBase {
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
export declare class RedisProjectsLocationsInstancesRescheduleMaintenanceSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RedisProjectsLocationsInstancesRescheduleMaintenanceRequest extends SpeakeasyBase {
    pathParams: RedisProjectsLocationsInstancesRescheduleMaintenancePathParams;
    queryParams: RedisProjectsLocationsInstancesRescheduleMaintenanceQueryParams;
    request?: shared.RescheduleMaintenanceRequest;
    security: RedisProjectsLocationsInstancesRescheduleMaintenanceSecurity;
}
export declare class RedisProjectsLocationsInstancesRescheduleMaintenanceResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
