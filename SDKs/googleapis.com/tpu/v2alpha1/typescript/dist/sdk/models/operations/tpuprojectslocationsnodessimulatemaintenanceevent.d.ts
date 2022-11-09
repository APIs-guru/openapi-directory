import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TpuProjectsLocationsNodesSimulateMaintenanceEventPathParams extends SpeakeasyBase {
    name: string;
}
export declare class TpuProjectsLocationsNodesSimulateMaintenanceEventQueryParams extends SpeakeasyBase {
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
export declare class TpuProjectsLocationsNodesSimulateMaintenanceEventSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TpuProjectsLocationsNodesSimulateMaintenanceEventRequest extends SpeakeasyBase {
    pathParams: TpuProjectsLocationsNodesSimulateMaintenanceEventPathParams;
    queryParams: TpuProjectsLocationsNodesSimulateMaintenanceEventQueryParams;
    request?: shared.SimulateMaintenanceEventRequest;
    security: TpuProjectsLocationsNodesSimulateMaintenanceEventSecurity;
}
export declare class TpuProjectsLocationsNodesSimulateMaintenanceEventResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
