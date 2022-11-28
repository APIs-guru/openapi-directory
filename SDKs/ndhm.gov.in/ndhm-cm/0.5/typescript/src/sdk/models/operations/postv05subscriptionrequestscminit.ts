import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05SubscriptionRequestsCmInitHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostV05SubscriptionRequestsCmInitRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  subscriptionRequest?: shared.SubscriptionRequest;
}


export class PostV05SubscriptionRequestsCmInitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05SubscriptionRequestsCmInitHeaders;

  @SpeakeasyMetadata()
  request: PostV05SubscriptionRequestsCmInitRequests;
}


export class PostV05SubscriptionRequestsCmInitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
