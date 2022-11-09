import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubscriptionsApiPutSubscription2Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class SubscriptionsApiPutSubscription2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
