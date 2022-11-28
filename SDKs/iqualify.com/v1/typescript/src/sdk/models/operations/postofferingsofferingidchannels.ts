import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostOfferingsOfferingIdChannelsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class PostOfferingsOfferingIdChannelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostOfferingsOfferingIdChannelsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ChannelRequired;
}


export class PostOfferingsOfferingIdChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  channelResponse?: shared.ChannelResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
