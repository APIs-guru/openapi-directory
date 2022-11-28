import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostOfferingsOfferingIdChannelsChannelIdLearnersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelId" })
  channelId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class PostOfferingsOfferingIdChannelsChannelIdLearnersRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;
}


export class PostOfferingsOfferingIdChannelsChannelIdLearnersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostOfferingsOfferingIdChannelsChannelIdLearnersPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostOfferingsOfferingIdChannelsChannelIdLearnersRequestBody;
}


export class PostOfferingsOfferingIdChannelsChannelIdLearnersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
