import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ZippedScreenshotsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=test_id" })
  testId: string;
}


export class ZippedScreenshotsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class ZippedScreenshotsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ZippedScreenshotsPathParams;

  @Metadata()
  security: ZippedScreenshotsSecurity;
}


export class ZippedScreenshotsResponse extends SpeakeasyBase {
  @Metadata()
  accessDenied?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  forbidden?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  screenshotNotFound?: any;

  @Metadata()
  zippedScreenshotsSuccess?: shared.ZippedScreenshotsSuccess;
}
