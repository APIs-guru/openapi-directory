import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkAlertsSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations
/** 
 * A hash of destinations for this specific alert
**/
export class UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allAdmins" })
  allAdmins?: boolean;

  @SpeakeasyMetadata({ data: "json, name=emails" })
  emails?: string[];

  @SpeakeasyMetadata({ data: "json, name=httpServerIds" })
  httpServerIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=snmp" })
  snmp?: boolean;
}


export class UpdateNetworkAlertsSettingsRequestBodyAlerts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alertDestinations" })
  alertDestinations?: UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


// UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations
/** 
 * The network-wide destinations for all alerts on the network.
**/
export class UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allAdmins" })
  allAdmins?: boolean;

  @SpeakeasyMetadata({ data: "json, name=emails" })
  emails?: string[];

  @SpeakeasyMetadata({ data: "json, name=httpServerIds" })
  httpServerIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=snmp" })
  snmp?: boolean;
}


export class UpdateNetworkAlertsSettingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alerts", elemType: UpdateNetworkAlertsSettingsRequestBodyAlerts })
  alerts?: UpdateNetworkAlertsSettingsRequestBodyAlerts[];

  @SpeakeasyMetadata({ data: "json, name=defaultDestinations" })
  defaultDestinations?: UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations;
}


export class UpdateNetworkAlertsSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkAlertsSettingsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkAlertsSettingsRequestBody;
}


export class UpdateNetworkAlertsSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkAlertsSettings200ApplicationJsonObject?: Map<string, any>;
}
