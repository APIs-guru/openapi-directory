import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV05SubscriptionRequestsCmOnInitHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" })
  xHiuId: string;
}


export class PostV05SubscriptionRequestsCmOnInitRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostV05SubscriptionRequestsCmOnInitHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.HiuSubscriptionRequestReceipt;
}


export class PostV05SubscriptionRequestsCmOnInitResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
