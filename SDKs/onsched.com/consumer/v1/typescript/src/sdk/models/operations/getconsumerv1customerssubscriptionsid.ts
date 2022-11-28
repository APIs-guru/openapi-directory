import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConsumerV1CustomersSubscriptionsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetConsumerV1CustomersSubscriptionsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConsumerV1CustomersSubscriptionsIdPathParams;
}


export class GetConsumerV1CustomersSubscriptionsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customerSubscriptionViewModel?: shared.CustomerSubscriptionViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
