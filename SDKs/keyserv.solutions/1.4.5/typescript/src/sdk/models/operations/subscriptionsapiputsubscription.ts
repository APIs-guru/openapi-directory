import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubscriptionsApiPutSubscriptionRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class SubscriptionsApiPutSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
