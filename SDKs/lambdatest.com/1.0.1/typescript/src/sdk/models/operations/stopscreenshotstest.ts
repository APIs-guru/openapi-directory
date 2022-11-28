import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StopScreenshotsTestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=test_id" })
  testId: string;
}


export class StopScreenshotsTestSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class StopScreenshotsTestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StopScreenshotsTestPathParams;

  @SpeakeasyMetadata()
  security: StopScreenshotsTestSecurity;
}


export class StopScreenshotsTestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDenied?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  forbidden?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  stopScreenshotNotFound?: any;

  @SpeakeasyMetadata()
  stopScreenshotSuccess?: any;
}
