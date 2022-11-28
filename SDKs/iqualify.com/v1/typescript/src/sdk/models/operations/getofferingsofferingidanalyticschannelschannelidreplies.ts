import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelId" })
  channelId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesPathParams;
}


export class GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Comment })
  comments?: shared.Comment[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
