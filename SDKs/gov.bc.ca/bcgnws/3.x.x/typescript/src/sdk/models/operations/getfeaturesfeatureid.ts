import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFeaturesFeatureIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=featureId" })
  featureId: number;
}


export class GetFeaturesFeatureIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFeaturesFeatureIdPathParams;
}


export class GetFeaturesFeatureIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
