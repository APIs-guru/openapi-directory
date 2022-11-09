import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channelId" })
  channelId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsPathParams;
}


export class GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.HttpPost })
  httpPosts?: shared.HttpPost[];
}
