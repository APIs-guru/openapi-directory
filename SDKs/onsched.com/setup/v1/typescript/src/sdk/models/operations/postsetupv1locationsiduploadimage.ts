import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1LocationsIdUploadimagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1LocationsIdUploadimageRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  resourceImageInputModel?: shared.ResourceImageInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  resourceImageInputModel1?: shared.ResourceImageInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  resourceImageInputModel2?: shared.ResourceImageInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  resourceImageInputModel3?: shared.ResourceImageInputModel;
}


export class PostSetupV1LocationsIdUploadimageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSetupV1LocationsIdUploadimagePathParams;

  @SpeakeasyMetadata()
  request?: PostSetupV1LocationsIdUploadimageRequests;
}


export class PostSetupV1LocationsIdUploadimageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  locationViewModel?: shared.LocationViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
