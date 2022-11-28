import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05SubscriptionRequestsHiuOnNotifyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostV05SubscriptionRequestsHiuOnNotifyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05SubscriptionRequestsHiuOnNotifyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.HiuSubscriptionRequestNotificationAcknowledgement;
}


export class PostV05SubscriptionRequestsHiuOnNotifyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
