import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05ConsentsHiuOnNotifyHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-CM-ID" })
  xCmId: string;
}


export class PostV05ConsentsHiuOnNotifyRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05ConsentsHiuOnNotifyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.HiuConsentNotificationResponse;
}


export class PostV05ConsentsHiuOnNotifyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
