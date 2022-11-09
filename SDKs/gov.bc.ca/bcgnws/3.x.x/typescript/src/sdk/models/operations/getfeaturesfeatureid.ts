import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFeaturesFeatureIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=featureId" })
  featureId: number;
}


export class GetFeaturesFeatureIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFeaturesFeatureIdPathParams;
}


export class GetFeaturesFeatureIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
