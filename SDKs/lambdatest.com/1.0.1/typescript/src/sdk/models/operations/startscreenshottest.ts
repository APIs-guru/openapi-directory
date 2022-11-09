import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartScreenshotTestSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class StartScreenshotTestRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ScreenshotPayload;

  @Metadata()
  security: StartScreenshotTestSecurity;
}


export class StartScreenshotTestResponse extends SpeakeasyBase {
  @Metadata()
  accessDenied?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  forbidden?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  startScreenshotBadRequest?: shared.StartScreenshotBadRequest;

  @Metadata()
  startScreenshotSuccess?: shared.StartScreenshotSuccess;
}
