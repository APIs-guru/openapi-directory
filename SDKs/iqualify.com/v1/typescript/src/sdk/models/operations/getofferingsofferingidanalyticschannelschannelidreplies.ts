import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channelId" })
  channelId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesPathParams;
}


export class GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Comment })
  comments?: shared.Comment[];

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
