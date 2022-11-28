import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ScreenshotsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=test_id" })
  testId: string;
}


export class ScreenshotsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class ScreenshotsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ScreenshotsPathParams;

  @SpeakeasyMetadata()
  security: ScreenshotsSecurity;
}


export class ScreenshotsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDenied?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  forbidden?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  screenshotDetails?: shared.ScreenshotDetails;

  @SpeakeasyMetadata()
  screenshotNotFound?: any;
}
