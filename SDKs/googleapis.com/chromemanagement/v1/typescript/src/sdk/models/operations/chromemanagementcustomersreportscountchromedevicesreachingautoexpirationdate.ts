import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=customer" })
  customer: string;
}


export class ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxAueDate" })
  maxAueDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minAueDate" })
  minAueDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orgUnitId" })
  orgUnitId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDatePathParams;

  @Metadata()
  queryParams: ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams;

  @Metadata()
  security: ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateSecurity;
}


export class ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse?: shared.GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse;

  @Metadata()
  statusCode: number;
}
