import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05SubscriptionsHiuNotifyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" })
  xHiuId: string;
}


export class PostV05SubscriptionsHiuNotifyRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  hiuSubscriptionNotification?: shared.HiuSubscriptionNotification;
}


export class PostV05SubscriptionsHiuNotifyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05SubscriptionsHiuNotifyHeaders;

  @SpeakeasyMetadata()
  request: PostV05SubscriptionsHiuNotifyRequests;
}


export class PostV05SubscriptionsHiuNotifyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
