import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChromemanagementCustomersReportsFindInstalledAppDevicesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=customer" })
  customer: string;
}

export enum ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum {
    AppTypeUnspecified = "APP_TYPE_UNSPECIFIED"
,    Extension = "EXTENSION"
,    App = "APP"
,    Theme = "THEME"
,    HostedApp = "HOSTED_APP"
,    AndroidApp = "ANDROID_APP"
}


export class ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=appId" })
  appId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=appType" })
  appType?: ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orgUnitId" })
  orgUnitId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ChromemanagementCustomersReportsFindInstalledAppDevicesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ChromemanagementCustomersReportsFindInstalledAppDevicesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChromemanagementCustomersReportsFindInstalledAppDevicesPathParams;

  @Metadata()
  queryParams: ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams;

  @Metadata()
  security: ChromemanagementCustomersReportsFindInstalledAppDevicesSecurity;
}


export class ChromemanagementCustomersReportsFindInstalledAppDevicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleChromeManagementV1FindInstalledAppDevicesResponse?: shared.GoogleChromeManagementV1FindInstalledAppDevicesResponse;

  @Metadata()
  statusCode: number;
}
