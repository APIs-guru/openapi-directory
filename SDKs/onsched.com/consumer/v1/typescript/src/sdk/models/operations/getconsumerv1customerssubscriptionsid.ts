import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConsumerV1CustomersSubscriptionsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetConsumerV1CustomersSubscriptionsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConsumerV1CustomersSubscriptionsIdPathParams;
}


export class GetConsumerV1CustomersSubscriptionsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customerSubscriptionViewModel?: shared.CustomerSubscriptionViewModel;

  @Metadata()
  statusCode: number;
}
