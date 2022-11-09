import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1ResourcesIdUploadimagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1ResourcesIdUploadimageRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  resourceImageInputModel?: shared.ResourceImageInputModel;

  @Metadata({ data: "request, media_type=application/json" })
  resourceImageInputModel1?: shared.ResourceImageInputModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  resourceImageInputModel2?: shared.ResourceImageInputModel;

  @Metadata({ data: "request, media_type=text/json" })
  resourceImageInputModel3?: shared.ResourceImageInputModel;
}


export class PostSetupV1ResourcesIdUploadimageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSetupV1ResourcesIdUploadimagePathParams;

  @Metadata()
  request?: PostSetupV1ResourcesIdUploadimageRequests;
}


export class PostSetupV1ResourcesIdUploadimageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceViewModel?: shared.ResourceViewModel;

  @Metadata()
  statusCode: number;
}
