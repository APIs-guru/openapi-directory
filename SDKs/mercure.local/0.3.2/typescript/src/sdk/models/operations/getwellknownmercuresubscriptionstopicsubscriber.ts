import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWellKnownMercureSubscriptionsTopicSubscriberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriber" })
  subscriber: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=topic" })
  topic: string;
}


export class GetWellKnownMercureSubscriptionsTopicSubscriberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWellKnownMercureSubscriptionsTopicSubscriberPathParams;
}


export class GetWellKnownMercureSubscriptionsTopicSubscriberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subscriptions?: shared.Subscriptions;
}
