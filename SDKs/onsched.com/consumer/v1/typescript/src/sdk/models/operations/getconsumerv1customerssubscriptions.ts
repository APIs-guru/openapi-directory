import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConsumerV1CustomersSubscriptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetConsumerV1CustomersSubscriptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetConsumerV1CustomersSubscriptionsQueryParams;
}


export class GetConsumerV1CustomersSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customerSubscriptionListViewModel?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
