import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProximitybeaconBeaconsDiagnosticsListPathParams extends SpeakeasyBase {
    beaconName: string;
}
export declare enum ProximitybeaconBeaconsDiagnosticsListAlertFilterEnum {
    AlertUnspecified = "ALERT_UNSPECIFIED",
    WrongLocation = "WRONG_LOCATION",
    LowBattery = "LOW_BATTERY",
    LowActivity = "LOW_ACTIVITY"
}
export declare class ProximitybeaconBeaconsDiagnosticsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alertFilter?: ProximitybeaconBeaconsDiagnosticsListAlertFilterEnum;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    projectId?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ProximitybeaconBeaconsDiagnosticsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProximitybeaconBeaconsDiagnosticsListRequest extends SpeakeasyBase {
    pathParams: ProximitybeaconBeaconsDiagnosticsListPathParams;
    queryParams: ProximitybeaconBeaconsDiagnosticsListQueryParams;
    security: ProximitybeaconBeaconsDiagnosticsListSecurity;
}
export declare class ProximitybeaconBeaconsDiagnosticsListResponse extends SpeakeasyBase {
    contentType: string;
    listDiagnosticsResponse?: shared.ListDiagnosticsResponse;
    statusCode: number;
}
