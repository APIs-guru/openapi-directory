import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkAlertsSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations
/** 
 * A hash of destinations for this specific alert
**/
export class UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations extends SpeakeasyBase {
  @Metadata({ data: "json, name=allAdmins" })
  allAdmins?: boolean;

  @Metadata({ data: "json, name=emails" })
  emails?: string[];

  @Metadata({ data: "json, name=httpServerIds" })
  httpServerIds?: string[];

  @Metadata({ data: "json, name=snmp" })
  snmp?: boolean;
}


export class UpdateNetworkAlertsSettingsRequestBodyAlerts extends SpeakeasyBase {
  @Metadata({ data: "json, name=alertDestinations" })
  alertDestinations?: UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=filters" })
  filters?: Map<string, any>;

  @Metadata({ data: "json, name=type" })
  type: string;
}


// UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations
/** 
 * The network-wide destinations for all alerts on the network.
**/
export class UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations extends SpeakeasyBase {
  @Metadata({ data: "json, name=allAdmins" })
  allAdmins?: boolean;

  @Metadata({ data: "json, name=emails" })
  emails?: string[];

  @Metadata({ data: "json, name=httpServerIds" })
  httpServerIds?: string[];

  @Metadata({ data: "json, name=snmp" })
  snmp?: boolean;
}


export class UpdateNetworkAlertsSettingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=alerts", elemType: operations.UpdateNetworkAlertsSettingsRequestBodyAlerts })
  alerts?: UpdateNetworkAlertsSettingsRequestBodyAlerts[];

  @Metadata({ data: "json, name=defaultDestinations" })
  defaultDestinations?: UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations;
}


export class UpdateNetworkAlertsSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkAlertsSettingsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkAlertsSettingsRequestBody;
}


export class UpdateNetworkAlertsSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkAlertsSettings200ApplicationJsonObject?: Map<string, any>;
}
