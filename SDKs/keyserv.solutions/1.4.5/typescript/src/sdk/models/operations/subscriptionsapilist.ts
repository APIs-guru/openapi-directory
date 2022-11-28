import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SubscriptionsApiListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class SubscriptionsApiListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SubscriptionsApiListQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class SubscriptionsApiListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.SubscriptionView })
  subscriptionViews?: shared.SubscriptionView[];
}
