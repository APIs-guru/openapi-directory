import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLongviewSubscriptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class GetLongviewSubscriptionDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLongviewSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLongviewSubscriptionPathParams;
}


export class GetLongviewSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  longviewSubscription?: shared.LongviewSubscription;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLongviewSubscriptionDefaultApplicationJsonObject?: GetLongviewSubscriptionDefaultApplicationJson;
}
