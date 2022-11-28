import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubscriptionsApiPutSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class SubscriptionsApiPutSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
