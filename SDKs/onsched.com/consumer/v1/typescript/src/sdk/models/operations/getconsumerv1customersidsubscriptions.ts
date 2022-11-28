import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConsumerV1CustomersIdSubscriptionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetConsumerV1CustomersIdSubscriptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConsumerV1CustomersIdSubscriptionsPathParams;
}


export class GetConsumerV1CustomersIdSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customerSubscriptionViewModel?: shared.CustomerSubscriptionViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
