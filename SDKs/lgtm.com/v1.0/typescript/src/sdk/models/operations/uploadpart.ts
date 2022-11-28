import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UploadPartPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=session-id" })
  sessionId: string;
}


export class UploadPartRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" })
  applicationOctetStream: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/zip" })
  applicationZip: Uint8Array;
}


export class UploadPartSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class UploadPartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UploadPartPathParams;

  @SpeakeasyMetadata()
  request: UploadPartRequests;

  @SpeakeasyMetadata()
  security: UploadPartSecurity;
}


export class UploadPartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
