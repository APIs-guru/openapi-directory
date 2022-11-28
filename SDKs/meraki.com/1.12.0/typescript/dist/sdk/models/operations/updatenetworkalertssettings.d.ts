import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkAlertsSettingsPathParams extends SpeakeasyBase {
    networkId: string;
}
/**
 * A hash of destinations for this specific alert
**/
export declare class UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations extends SpeakeasyBase {
    allAdmins?: boolean;
    emails?: string[];
    httpServerIds?: string[];
    snmp?: boolean;
}
export declare class UpdateNetworkAlertsSettingsRequestBodyAlerts extends SpeakeasyBase {
    alertDestinations?: UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations;
    enabled?: boolean;
    filters?: Map<string, any>;
    type: string;
}
/**
 * The network-wide destinations for all alerts on the network.
**/
export declare class UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations extends SpeakeasyBase {
    allAdmins?: boolean;
    emails?: string[];
    httpServerIds?: string[];
    snmp?: boolean;
}
export declare class UpdateNetworkAlertsSettingsRequestBody extends SpeakeasyBase {
    alerts?: UpdateNetworkAlertsSettingsRequestBodyAlerts[];
    defaultDestinations?: UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations;
}
export declare class UpdateNetworkAlertsSettingsRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkAlertsSettingsPathParams;
    request?: UpdateNetworkAlertsSettingsRequestBody;
}
export declare class UpdateNetworkAlertsSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkAlertsSettings200ApplicationJsonObject?: Map<string, any>;
}
