import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetConsumerV1CustomersSubscriptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetConsumerV1CustomersSubscriptionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetConsumerV1CustomersSubscriptionsQueryParams;
}


export class GetConsumerV1CustomersSubscriptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customerSubscriptionListViewModel?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
