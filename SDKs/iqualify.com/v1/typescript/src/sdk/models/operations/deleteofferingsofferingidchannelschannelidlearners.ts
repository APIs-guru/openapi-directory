import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteOfferingsOfferingIdChannelsChannelIdLearnersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channelId" })
  channelId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;
}


export class DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteOfferingsOfferingIdChannelsChannelIdLearnersPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequestBody;
}


export class DeleteOfferingsOfferingIdChannelsChannelIdLearnersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
