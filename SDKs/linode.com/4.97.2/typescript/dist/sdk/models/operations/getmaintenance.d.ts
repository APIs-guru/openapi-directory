import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const GetMaintenanceServerList: readonly ["https://api.linode.com/v4beta"];
export declare class GetMaintenanceSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetMaintenance200ApplicationJson extends SpeakeasyBase {
    data?: shared.Maintenance[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetMaintenanceDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetMaintenanceRequest extends SpeakeasyBase {
    serverUrl?: string;
    security: GetMaintenanceSecurity;
}
export declare class GetMaintenanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getMaintenance200ApplicationJsonObject?: GetMaintenance200ApplicationJson;
    getMaintenanceDefaultApplicationJsonObject?: GetMaintenanceDefaultApplicationJson;
}
