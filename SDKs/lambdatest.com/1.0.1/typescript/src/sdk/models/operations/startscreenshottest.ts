import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StartScreenshotTestSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class StartScreenshotTestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ScreenshotPayload;

  @SpeakeasyMetadata()
  security: StartScreenshotTestSecurity;
}


export class StartScreenshotTestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDenied?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  forbidden?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  startScreenshotBadRequest?: shared.StartScreenshotBadRequest;

  @SpeakeasyMetadata()
  startScreenshotSuccess?: shared.StartScreenshotSuccess;
}
