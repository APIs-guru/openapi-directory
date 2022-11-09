import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConsumerV1CustomersIdSubscriptionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetConsumerV1CustomersIdSubscriptionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConsumerV1CustomersIdSubscriptionsPathParams;
}


export class GetConsumerV1CustomersIdSubscriptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customerSubscriptionViewModel?: shared.CustomerSubscriptionViewModel;

  @Metadata()
  statusCode: number;
}
