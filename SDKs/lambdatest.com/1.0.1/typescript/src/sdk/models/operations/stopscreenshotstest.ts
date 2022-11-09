import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StopScreenshotsTestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=test_id" })
  testId: string;
}


export class StopScreenshotsTestSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class StopScreenshotsTestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StopScreenshotsTestPathParams;

  @Metadata()
  security: StopScreenshotsTestSecurity;
}


export class StopScreenshotsTestResponse extends SpeakeasyBase {
  @Metadata()
  accessDenied?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  forbidden?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  stopScreenshotNotFound?: any;

  @Metadata()
  stopScreenshotSuccess?: any;
}
