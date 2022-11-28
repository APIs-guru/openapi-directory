import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubscriptionsApiDeleteSubscriptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class SubscriptionsApiDeleteSubscriptionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keep" })
  keep: boolean;
}


export class SubscriptionsApiDeleteSubscriptionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey: string;
}


export class SubscriptionsApiDeleteSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SubscriptionsApiDeleteSubscriptionPathParams;

  @SpeakeasyMetadata()
  queryParams: SubscriptionsApiDeleteSubscriptionQueryParams;

  @SpeakeasyMetadata()
  headers: SubscriptionsApiDeleteSubscriptionHeaders;
}


export class SubscriptionsApiDeleteSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
