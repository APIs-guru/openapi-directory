import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOfferingsOfferingIdChannelsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdChannelsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOfferingsOfferingIdChannelsPathParams;
}


export class GetOfferingsOfferingIdChannelsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ChannelResponse })
  channelResponses?: shared.ChannelResponse[];

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
