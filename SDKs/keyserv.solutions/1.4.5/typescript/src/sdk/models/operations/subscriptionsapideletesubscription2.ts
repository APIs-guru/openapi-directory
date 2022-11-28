import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubscriptionsApiDeleteSubscription2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class SubscriptionsApiDeleteSubscription2QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keep" })
  keep: boolean;
}


export class SubscriptionsApiDeleteSubscription2Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey: string;
}


export class SubscriptionsApiDeleteSubscription2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SubscriptionsApiDeleteSubscription2PathParams;

  @SpeakeasyMetadata()
  queryParams: SubscriptionsApiDeleteSubscription2QueryParams;

  @SpeakeasyMetadata()
  headers: SubscriptionsApiDeleteSubscription2Headers;
}


export class SubscriptionsApiDeleteSubscription2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
