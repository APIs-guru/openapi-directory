import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MemcacheProjectsLocationsInstancesRescheduleMaintenancePathParams extends SpeakeasyBase {
    instance: string;
}
export declare class MemcacheProjectsLocationsInstancesRescheduleMaintenanceQueryParams extends SpeakeasyBase {
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
export declare class MemcacheProjectsLocationsInstancesRescheduleMaintenanceSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MemcacheProjectsLocationsInstancesRescheduleMaintenanceRequest extends SpeakeasyBase {
    pathParams: MemcacheProjectsLocationsInstancesRescheduleMaintenancePathParams;
    queryParams: MemcacheProjectsLocationsInstancesRescheduleMaintenanceQueryParams;
    request?: shared.RescheduleMaintenanceRequest;
    security: MemcacheProjectsLocationsInstancesRescheduleMaintenanceSecurity;
}
export declare class MemcacheProjectsLocationsInstancesRescheduleMaintenanceResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
