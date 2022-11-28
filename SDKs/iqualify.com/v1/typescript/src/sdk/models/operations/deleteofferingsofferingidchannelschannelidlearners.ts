import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteOfferingsOfferingIdChannelsChannelIdLearnersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelId" })
  channelId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;
}


export class DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteOfferingsOfferingIdChannelsChannelIdLearnersPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequestBody;
}


export class DeleteOfferingsOfferingIdChannelsChannelIdLearnersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
