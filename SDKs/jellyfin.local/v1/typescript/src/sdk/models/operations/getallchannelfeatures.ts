import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAllChannelFeaturesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetAllChannelFeaturesRequest extends SpeakeasyBase {
  @Metadata()
  security: GetAllChannelFeaturesSecurity;
}


export class GetAllChannelFeaturesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ChannelFeatures })
  channelFeatures?: shared.ChannelFeatures[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
