import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkCameraQualityRetentionProfilesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkCameraQualityRetentionProfilesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkCameraQualityRetentionProfilesPathParams;
}


export class GetNetworkCameraQualityRetentionProfilesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkCameraQualityRetentionProfiles200ApplicationJsonObject?: Map<string, any>;
}
