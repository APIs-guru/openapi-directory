import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChannelFeaturesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelId" })
  channelId: string;
}


export class GetChannelFeaturesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetChannelFeaturesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChannelFeaturesPathParams;

  @SpeakeasyMetadata()
  security: GetChannelFeaturesSecurity;
}


export class GetChannelFeaturesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  channelFeatures?: shared.ChannelFeatures;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
