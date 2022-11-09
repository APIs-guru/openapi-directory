import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostConsumerV1CustomersIdSubscriptionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostConsumerV1CustomersIdSubscriptionsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  customerSubscriptionInputModel?: shared.CustomerSubscriptionInputModel;

  @Metadata({ data: "request, media_type=application/json" })
  customerSubscriptionInputModel1?: shared.CustomerSubscriptionInputModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  customerSubscriptionInputModel2?: shared.CustomerSubscriptionInputModel;

  @Metadata({ data: "request, media_type=text/json" })
  customerSubscriptionInputModel3?: shared.CustomerSubscriptionInputModel;
}


export class PostConsumerV1CustomersIdSubscriptionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostConsumerV1CustomersIdSubscriptionsPathParams;

  @Metadata()
  request?: PostConsumerV1CustomersIdSubscriptionsRequests;
}


export class PostConsumerV1CustomersIdSubscriptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customerSubscriptionViewModel?: shared.CustomerSubscriptionViewModel;

  @Metadata()
  statusCode: number;
}
