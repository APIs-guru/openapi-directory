import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetChannelFeaturesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channelId" })
  channelId: string;
}


export class GetChannelFeaturesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetChannelFeaturesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetChannelFeaturesPathParams;

  @Metadata()
  security: GetChannelFeaturesSecurity;
}


export class GetChannelFeaturesResponse extends SpeakeasyBase {
  @Metadata()
  channelFeatures?: shared.ChannelFeatures;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
