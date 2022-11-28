import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWellKnownMercureSubscriptionsTopicPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=topic" })
  topic: string;
}


export class GetWellKnownMercureSubscriptionsTopicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWellKnownMercureSubscriptionsTopicPathParams;
}


export class GetWellKnownMercureSubscriptionsTopicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subscriptions?: shared.Subscriptions;
}
