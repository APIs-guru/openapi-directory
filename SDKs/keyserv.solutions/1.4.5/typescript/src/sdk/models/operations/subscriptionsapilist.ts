import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SubscriptionsApiListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class SubscriptionsApiListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SubscriptionsApiListQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class SubscriptionsApiListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.SubscriptionView })
  subscriptionViews?: shared.SubscriptionView[];
}
