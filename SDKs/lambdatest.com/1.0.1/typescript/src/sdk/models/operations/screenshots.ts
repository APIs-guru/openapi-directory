import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ScreenshotsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=test_id" })
  testId: string;
}


export class ScreenshotsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class ScreenshotsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ScreenshotsPathParams;

  @Metadata()
  security: ScreenshotsSecurity;
}


export class ScreenshotsResponse extends SpeakeasyBase {
  @Metadata()
  accessDenied?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  forbidden?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  screenshotDetails?: shared.ScreenshotDetails;

  @Metadata()
  screenshotNotFound?: any;
}
