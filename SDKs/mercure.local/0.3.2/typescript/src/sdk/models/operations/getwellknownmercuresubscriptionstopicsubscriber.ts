import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWellKnownMercureSubscriptionsTopicSubscriberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscriber" })
  subscriber: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=topic" })
  topic: string;
}


export class GetWellKnownMercureSubscriptionsTopicSubscriberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWellKnownMercureSubscriptionsTopicSubscriberPathParams;
}


export class GetWellKnownMercureSubscriptionsTopicSubscriberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  subscriptions?: shared.Subscriptions;
}
