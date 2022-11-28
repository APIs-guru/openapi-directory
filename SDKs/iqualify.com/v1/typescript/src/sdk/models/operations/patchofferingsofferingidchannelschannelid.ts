import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchOfferingsOfferingIdChannelsChannelIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelId" })
  channelId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class PatchOfferingsOfferingIdChannelsChannelIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchOfferingsOfferingIdChannelsChannelIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Channel;
}


export class PatchOfferingsOfferingIdChannelsChannelIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  channelResponse?: shared.ChannelResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
