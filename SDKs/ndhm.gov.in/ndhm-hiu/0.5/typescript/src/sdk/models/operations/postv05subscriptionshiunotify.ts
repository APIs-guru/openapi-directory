import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05SubscriptionsHiuNotifyHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" })
  xHiuId: string;
}


export class PostV05SubscriptionsHiuNotifyRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  hiuSubscriptionNotification?: shared.HiuSubscriptionNotification;
}


export class PostV05SubscriptionsHiuNotifyRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05SubscriptionsHiuNotifyHeaders;

  @Metadata()
  request: PostV05SubscriptionsHiuNotifyRequests;
}


export class PostV05SubscriptionsHiuNotifyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
