import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AbortUploadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=session-id" })
  sessionId: string;
}


export class AbortUploadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class AbortUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AbortUploadPathParams;

  @SpeakeasyMetadata()
  security: AbortUploadSecurity;
}


export class AbortUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  operation?: shared.Operation;
}
