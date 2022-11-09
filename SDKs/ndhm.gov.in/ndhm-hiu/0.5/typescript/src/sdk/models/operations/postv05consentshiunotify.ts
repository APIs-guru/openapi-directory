import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const POSTV05CONSENTSHIUNOTIFY_SERVERS = [
	"https://dev.ndhm.gov.in/hiu",
];



export class PostV05ConsentsHiuNotifyHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" })
  xHiuId: string;
}


export class PostV05ConsentsHiuNotifyRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  headers: PostV05ConsentsHiuNotifyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.HiuConsentNotificationEvent;
}


export class PostV05ConsentsHiuNotifyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
