import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkCameraQualityRetentionProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=qualityRetentionProfileId" })
  qualityRetentionProfileId: string;
}


export class GetNetworkCameraQualityRetentionProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkCameraQualityRetentionProfilePathParams;
}


export class GetNetworkCameraQualityRetentionProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkCameraQualityRetentionProfile200ApplicationJsonObject?: Map<string, any>;
}
