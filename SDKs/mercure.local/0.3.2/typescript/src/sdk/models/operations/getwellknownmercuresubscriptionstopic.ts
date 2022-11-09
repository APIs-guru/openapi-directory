import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWellKnownMercureSubscriptionsTopicPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=topic" })
  topic: string;
}


export class GetWellKnownMercureSubscriptionsTopicRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWellKnownMercureSubscriptionsTopicPathParams;
}


export class GetWellKnownMercureSubscriptionsTopicResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  subscriptions?: shared.Subscriptions;
}
