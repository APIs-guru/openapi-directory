import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1LocationsIdUploadimagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1LocationsIdUploadimageRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  resourceImageInputModel?: shared.ResourceImageInputModel;

  @Metadata({ data: "request, media_type=application/json" })
  resourceImageInputModel1?: shared.ResourceImageInputModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  resourceImageInputModel2?: shared.ResourceImageInputModel;

  @Metadata({ data: "request, media_type=text/json" })
  resourceImageInputModel3?: shared.ResourceImageInputModel;
}


export class PostSetupV1LocationsIdUploadimageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSetupV1LocationsIdUploadimagePathParams;

  @Metadata()
  request?: PostSetupV1LocationsIdUploadimageRequests;
}


export class PostSetupV1LocationsIdUploadimageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  locationViewModel?: shared.LocationViewModel;

  @Metadata()
  statusCode: number;
}
