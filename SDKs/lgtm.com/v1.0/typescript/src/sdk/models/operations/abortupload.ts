import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AbortUploadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=session-id" })
  sessionId: string;
}


export class AbortUploadSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class AbortUploadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AbortUploadPathParams;

  @Metadata()
  security: AbortUploadSecurity;
}


export class AbortUploadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  operation?: shared.Operation;
}
