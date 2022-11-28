import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOfferingsOfferingIdChannelsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdChannelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOfferingsOfferingIdChannelsPathParams;
}


export class GetOfferingsOfferingIdChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ChannelResponse })
  channelResponses?: shared.ChannelResponse[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
