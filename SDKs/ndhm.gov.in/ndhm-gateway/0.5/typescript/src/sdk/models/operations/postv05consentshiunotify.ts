import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05ConsentsHiuNotifyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" })
  xHiuId: string;
}


export class PostV05ConsentsHiuNotifyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05ConsentsHiuNotifyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.HiuConsentNotificationEvent;
}


export class PostV05ConsentsHiuNotifyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
