import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostConsumerV1CustomersIdSubscriptionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostConsumerV1CustomersIdSubscriptionsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  customerSubscriptionInputModel?: shared.CustomerSubscriptionInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  customerSubscriptionInputModel1?: shared.CustomerSubscriptionInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  customerSubscriptionInputModel2?: shared.CustomerSubscriptionInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  customerSubscriptionInputModel3?: shared.CustomerSubscriptionInputModel;
}


export class PostConsumerV1CustomersIdSubscriptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostConsumerV1CustomersIdSubscriptionsPathParams;

  @SpeakeasyMetadata()
  request?: PostConsumerV1CustomersIdSubscriptionsRequests;
}


export class PostConsumerV1CustomersIdSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customerSubscriptionViewModel?: shared.CustomerSubscriptionViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
