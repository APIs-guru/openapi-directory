import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05SubscriptionsHiuOnNotifyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-CM-ID" })
  xCmId: string;
}


export class PostV05SubscriptionsHiuOnNotifyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05SubscriptionsHiuOnNotifyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.HiuSubscriptionNotificationAcknowledgment;
}


export class PostV05SubscriptionsHiuOnNotifyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
