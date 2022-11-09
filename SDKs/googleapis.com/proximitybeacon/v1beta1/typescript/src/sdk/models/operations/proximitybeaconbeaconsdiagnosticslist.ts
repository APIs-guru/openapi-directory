import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProximitybeaconBeaconsDiagnosticsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=beaconName" })
  beaconName: string;
}

export enum ProximitybeaconBeaconsDiagnosticsListAlertFilterEnum {
    AlertUnspecified = "ALERT_UNSPECIFIED"
,    WrongLocation = "WRONG_LOCATION"
,    LowBattery = "LOW_BATTERY"
,    LowActivity = "LOW_ACTIVITY"
}


export class ProximitybeaconBeaconsDiagnosticsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alertFilter" })
  alertFilter?: ProximitybeaconBeaconsDiagnosticsListAlertFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=projectId" })
  projectId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ProximitybeaconBeaconsDiagnosticsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ProximitybeaconBeaconsDiagnosticsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProximitybeaconBeaconsDiagnosticsListPathParams;

  @Metadata()
  queryParams: ProximitybeaconBeaconsDiagnosticsListQueryParams;

  @Metadata()
  security: ProximitybeaconBeaconsDiagnosticsListSecurity;
}


export class ProximitybeaconBeaconsDiagnosticsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listDiagnosticsResponse?: shared.ListDiagnosticsResponse;

  @Metadata()
  statusCode: number;
}
