import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostOfferingsOfferingIdChannelsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class PostOfferingsOfferingIdChannelsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostOfferingsOfferingIdChannelsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ChannelRequired;
}


export class PostOfferingsOfferingIdChannelsResponse extends SpeakeasyBase {
  @Metadata()
  channelResponse?: shared.ChannelResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
