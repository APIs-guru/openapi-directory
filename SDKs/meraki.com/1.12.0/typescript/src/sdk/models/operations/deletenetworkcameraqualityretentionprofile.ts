import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNetworkCameraQualityRetentionProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=qualityRetentionProfileId" })
  qualityRetentionProfileId: string;
}


export class DeleteNetworkCameraQualityRetentionProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNetworkCameraQualityRetentionProfilePathParams;
}


export class DeleteNetworkCameraQualityRetentionProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
