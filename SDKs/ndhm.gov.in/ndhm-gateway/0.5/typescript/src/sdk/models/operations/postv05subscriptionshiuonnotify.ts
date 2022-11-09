import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05SubscriptionsHiuOnNotifyHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-CM-ID" })
  xCmId: string;
}


export class PostV05SubscriptionsHiuOnNotifyRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05SubscriptionsHiuOnNotifyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.HiuSubscriptionNotificationAcknowledgment;
}


export class PostV05SubscriptionsHiuOnNotifyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
