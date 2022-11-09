import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOfferingsOfferingIdChannelsChannelIdLearnersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channelId" })
  channelId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdChannelsChannelIdLearnersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOfferingsOfferingIdChannelsChannelIdLearnersPathParams;
}


export class GetOfferingsOfferingIdChannelsChannelIdLearnersResponse extends SpeakeasyBase {
  @Metadata()
  channelResponse?: shared.ChannelResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
