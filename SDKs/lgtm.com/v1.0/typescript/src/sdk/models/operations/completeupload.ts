import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompleteUploadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=session-id" })
  sessionId: string;
}


export class CompleteUploadSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class CompleteUploadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompleteUploadPathParams;

  @Metadata()
  security: CompleteUploadSecurity;
}


export class CompleteUploadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  operation?: shared.Operation;
}
