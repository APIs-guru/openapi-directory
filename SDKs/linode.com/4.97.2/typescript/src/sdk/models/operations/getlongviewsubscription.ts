import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLongviewSubscriptionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: string;
}


export class GetLongviewSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLongviewSubscriptionPathParams;
}


export class GetLongviewSubscriptionDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLongviewSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  longviewSubscription?: shared.LongviewSubscription;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLongviewSubscriptionDefaultApplicationJsonObject?: GetLongviewSubscriptionDefaultApplicationJson;
}
