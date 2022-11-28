import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1ResourcesIdUploadimagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1ResourcesIdUploadimageRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  resourceImageInputModel?: shared.ResourceImageInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  resourceImageInputModel1?: shared.ResourceImageInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  resourceImageInputModel2?: shared.ResourceImageInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  resourceImageInputModel3?: shared.ResourceImageInputModel;
}


export class PostSetupV1ResourcesIdUploadimageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSetupV1ResourcesIdUploadimagePathParams;

  @SpeakeasyMetadata()
  request?: PostSetupV1ResourcesIdUploadimageRequests;
}


export class PostSetupV1ResourcesIdUploadimageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceViewModel?: shared.ResourceViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
