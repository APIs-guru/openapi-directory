import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubscriptionsApiFindRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class SubscriptionsApiFindResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  subscriptionsApiFind200ApplicationJsonOneOf?: any;
}
