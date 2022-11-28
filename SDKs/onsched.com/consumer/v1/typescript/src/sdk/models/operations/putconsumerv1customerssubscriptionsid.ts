import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutConsumerV1CustomersSubscriptionsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutConsumerV1CustomersSubscriptionsIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  customerSubscriptionUpdateModel?: shared.CustomerSubscriptionUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  customerSubscriptionUpdateModel1?: shared.CustomerSubscriptionUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  customerSubscriptionUpdateModel2?: shared.CustomerSubscriptionUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  customerSubscriptionUpdateModel3?: shared.CustomerSubscriptionUpdateModel;
}


export class PutConsumerV1CustomersSubscriptionsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutConsumerV1CustomersSubscriptionsIdPathParams;

  @SpeakeasyMetadata()
  request?: PutConsumerV1CustomersSubscriptionsIdRequests;
}


export class PutConsumerV1CustomersSubscriptionsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
