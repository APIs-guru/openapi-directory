import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubscriptionsApiEnableRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class SubscriptionsApiEnableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
