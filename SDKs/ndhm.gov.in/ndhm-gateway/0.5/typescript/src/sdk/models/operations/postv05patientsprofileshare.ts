import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const PostV05PatientsProfileShareServerList = [
	"https://your-hrp-server.com",
] as const;


export class PostV05PatientsProfileShareHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIP-ID" })
  xHipId: string;
}


export class PostV05PatientsProfileShareRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  shareProfileRequest?: shared.ShareProfileRequest;
}


export class PostV05PatientsProfileShareRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  headers: PostV05PatientsProfileShareHeaders;

  @SpeakeasyMetadata()
  request: PostV05PatientsProfileShareRequests;
}


export class PostV05PatientsProfileShareResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
