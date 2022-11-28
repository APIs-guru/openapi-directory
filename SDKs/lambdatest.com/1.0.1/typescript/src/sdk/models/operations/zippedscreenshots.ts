import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ZippedScreenshotsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=test_id" })
  testId: string;
}


export class ZippedScreenshotsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class ZippedScreenshotsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ZippedScreenshotsPathParams;

  @SpeakeasyMetadata()
  security: ZippedScreenshotsSecurity;
}


export class ZippedScreenshotsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDenied?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  forbidden?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  screenshotNotFound?: any;

  @SpeakeasyMetadata()
  zippedScreenshotsSuccess?: shared.ZippedScreenshotsSuccess;
}
