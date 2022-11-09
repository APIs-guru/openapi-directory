import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UploadPartPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=session-id" })
  sessionId: string;
}


export class UploadPartRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/octet-stream" })
  applicationOctetStream: Uint8Array;

  @Metadata({ data: "request, media_type=application/zip" })
  applicationZip: Uint8Array;
}


export class UploadPartSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class UploadPartRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UploadPartPathParams;

  @Metadata()
  request: UploadPartRequests;

  @Metadata()
  security: UploadPartSecurity;
}


export class UploadPartResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
