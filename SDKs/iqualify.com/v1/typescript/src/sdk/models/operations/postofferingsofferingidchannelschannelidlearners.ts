import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostOfferingsOfferingIdChannelsChannelIdLearnersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channelId" })
  channelId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class PostOfferingsOfferingIdChannelsChannelIdLearnersRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;
}


export class PostOfferingsOfferingIdChannelsChannelIdLearnersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostOfferingsOfferingIdChannelsChannelIdLearnersPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PostOfferingsOfferingIdChannelsChannelIdLearnersRequestBody;
}


export class PostOfferingsOfferingIdChannelsChannelIdLearnersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
