import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubscriptionsApiDeleteSubscription2PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class SubscriptionsApiDeleteSubscription2QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=keep" })
  keep: boolean;
}


export class SubscriptionsApiDeleteSubscription2Headers extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey: string;
}


export class SubscriptionsApiDeleteSubscription2Request extends SpeakeasyBase {
  @Metadata()
  pathParams: SubscriptionsApiDeleteSubscription2PathParams;

  @Metadata()
  queryParams: SubscriptionsApiDeleteSubscription2QueryParams;

  @Metadata()
  headers: SubscriptionsApiDeleteSubscription2Headers;
}


export class SubscriptionsApiDeleteSubscription2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
