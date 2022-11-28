import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkCameraQualityRetentionProfilesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkCameraQualityRetentionProfilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkCameraQualityRetentionProfilesPathParams;
}


export class GetNetworkCameraQualityRetentionProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkCameraQualityRetentionProfiles200ApplicationJsonObject?: Map<string, any>;
}
