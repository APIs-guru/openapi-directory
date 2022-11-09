import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05SubscriptionRequestsCmInitHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-CM-ID" })
  xCmId: string;
}


export class PostV05SubscriptionRequestsCmInitRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  subscriptionRequest?: shared.SubscriptionRequest;
}


export class PostV05SubscriptionRequestsCmInitRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05SubscriptionRequestsCmInitHeaders;

  @Metadata()
  request: PostV05SubscriptionRequestsCmInitRequests;
}


export class PostV05SubscriptionRequestsCmInitResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
