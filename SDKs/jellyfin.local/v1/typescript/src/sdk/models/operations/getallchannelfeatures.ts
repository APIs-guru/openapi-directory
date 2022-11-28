import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllChannelFeaturesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetAllChannelFeaturesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetAllChannelFeaturesSecurity;
}


export class GetAllChannelFeaturesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ChannelFeatures })
  channelFeatures?: shared.ChannelFeatures[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
