import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutConsumerV1CustomersSubscriptionsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutConsumerV1CustomersSubscriptionsIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  customerSubscriptionUpdateModel?: shared.CustomerSubscriptionUpdateModel;

  @Metadata({ data: "request, media_type=application/json" })
  customerSubscriptionUpdateModel1?: shared.CustomerSubscriptionUpdateModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  customerSubscriptionUpdateModel2?: shared.CustomerSubscriptionUpdateModel;

  @Metadata({ data: "request, media_type=text/json" })
  customerSubscriptionUpdateModel3?: shared.CustomerSubscriptionUpdateModel;
}


export class PutConsumerV1CustomersSubscriptionsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutConsumerV1CustomersSubscriptionsIdPathParams;

  @Metadata()
  request?: PutConsumerV1CustomersSubscriptionsIdRequests;
}


export class PutConsumerV1CustomersSubscriptionsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
