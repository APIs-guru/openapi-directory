import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchOfferingsOfferingIdChannelsChannelIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channelId" })
  channelId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class PatchOfferingsOfferingIdChannelsChannelIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchOfferingsOfferingIdChannelsChannelIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Channel;
}


export class PatchOfferingsOfferingIdChannelsChannelIdResponse extends SpeakeasyBase {
  @Metadata()
  channelResponse?: shared.ChannelResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
