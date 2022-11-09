import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubscriptionsApiCountRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class SubscriptionsApiCountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  subscriptionsApiCount200ApplicationJsonOneOf?: any;
}
