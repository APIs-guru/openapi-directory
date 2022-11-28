import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV05SubscriptionRequestsCmOnInitHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" })
  xHiuId: string;
}


export class PostV05SubscriptionRequestsCmOnInitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostV05SubscriptionRequestsCmOnInitHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.HiuSubscriptionRequestReceipt;
}


export class PostV05SubscriptionRequestsCmOnInitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
