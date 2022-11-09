import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubscriptionsApiDeleteSubscriptionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class SubscriptionsApiDeleteSubscriptionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=keep" })
  keep: boolean;
}


export class SubscriptionsApiDeleteSubscriptionHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey: string;
}


export class SubscriptionsApiDeleteSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SubscriptionsApiDeleteSubscriptionPathParams;

  @Metadata()
  queryParams: SubscriptionsApiDeleteSubscriptionQueryParams;

  @Metadata()
  headers: SubscriptionsApiDeleteSubscriptionHeaders;
}


export class SubscriptionsApiDeleteSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
