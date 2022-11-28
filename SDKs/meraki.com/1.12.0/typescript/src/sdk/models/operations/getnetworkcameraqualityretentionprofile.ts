import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkCameraQualityRetentionProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=qualityRetentionProfileId" })
  qualityRetentionProfileId: string;
}


export class GetNetworkCameraQualityRetentionProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkCameraQualityRetentionProfilePathParams;
}


export class GetNetworkCameraQualityRetentionProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkCameraQualityRetentionProfile200ApplicationJsonObject?: Map<string, any>;
}
