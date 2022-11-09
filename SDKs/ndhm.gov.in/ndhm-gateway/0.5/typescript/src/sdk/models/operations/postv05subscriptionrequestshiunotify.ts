import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05SubscriptionRequestsHiuNotifyHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" })
  xHiuId: string;
}


export class PostV05SubscriptionRequestsHiuNotifyRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  subscriptionApprovalNotification?: shared.SubscriptionApprovalNotification;
}


export class PostV05SubscriptionRequestsHiuNotifyRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05SubscriptionRequestsHiuNotifyHeaders;

  @Metadata()
  request: PostV05SubscriptionRequestsHiuNotifyRequests;
}


export class PostV05SubscriptionRequestsHiuNotifyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
