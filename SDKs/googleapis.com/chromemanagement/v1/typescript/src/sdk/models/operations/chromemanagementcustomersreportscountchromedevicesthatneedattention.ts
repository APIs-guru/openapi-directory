import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" })
  customer: string;
}


export class ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orgUnitId" })
  orgUnitId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readMask" })
  readMask?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionPathParams;

  @SpeakeasyMetadata()
  queryParams: ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionQueryParams;

  @SpeakeasyMetadata()
  security: ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionSecurity;
}


export class ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse?: shared.GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
