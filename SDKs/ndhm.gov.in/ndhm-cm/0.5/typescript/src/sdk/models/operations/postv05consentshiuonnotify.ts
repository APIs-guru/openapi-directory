import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05ConsentsHiuOnNotifyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostV05ConsentsHiuOnNotifyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05ConsentsHiuOnNotifyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.HiuConsentNotificationResponse;
}


export class PostV05ConsentsHiuOnNotifyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
