import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1ServicesIdUploadimagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1ServicesIdUploadimageRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  serviceImageInputModel?: shared.ServiceImageInputModel;

  @Metadata({ data: "request, media_type=application/json" })
  serviceImageInputModel1?: shared.ServiceImageInputModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  serviceImageInputModel2?: shared.ServiceImageInputModel;

  @Metadata({ data: "request, media_type=text/json" })
  serviceImageInputModel3?: shared.ServiceImageInputModel;
}


export class PostSetupV1ServicesIdUploadimageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSetupV1ServicesIdUploadimagePathParams;

  @Metadata()
  request?: PostSetupV1ServicesIdUploadimageRequests;
}


export class PostSetupV1ServicesIdUploadimageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceViewModel?: shared.ServiceViewModel;

  @Metadata()
  statusCode: number;
}
