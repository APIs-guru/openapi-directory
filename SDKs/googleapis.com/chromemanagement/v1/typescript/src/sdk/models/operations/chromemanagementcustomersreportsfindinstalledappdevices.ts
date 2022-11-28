import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChromemanagementCustomersReportsFindInstalledAppDevicesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" })
  customer: string;
}

export enum ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum {
    AppTypeUnspecified = "APP_TYPE_UNSPECIFIED",
    Extension = "EXTENSION",
    App = "APP",
    Theme = "THEME",
    HostedApp = "HOSTED_APP",
    AndroidApp = "ANDROID_APP"
}


export class ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appType" })
  appType?: ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orgUnitId" })
  orgUnitId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ChromemanagementCustomersReportsFindInstalledAppDevicesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ChromemanagementCustomersReportsFindInstalledAppDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChromemanagementCustomersReportsFindInstalledAppDevicesPathParams;

  @SpeakeasyMetadata()
  queryParams: ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams;

  @SpeakeasyMetadata()
  security: ChromemanagementCustomersReportsFindInstalledAppDevicesSecurity;
}


export class ChromemanagementCustomersReportsFindInstalledAppDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleChromeManagementV1FindInstalledAppDevicesResponse?: shared.GoogleChromeManagementV1FindInstalledAppDevicesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
