import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1ServicesIdUploadimagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1ServicesIdUploadimageRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  serviceImageInputModel?: shared.ServiceImageInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  serviceImageInputModel1?: shared.ServiceImageInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  serviceImageInputModel2?: shared.ServiceImageInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  serviceImageInputModel3?: shared.ServiceImageInputModel;
}


export class PostSetupV1ServicesIdUploadimageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSetupV1ServicesIdUploadimagePathParams;

  @SpeakeasyMetadata()
  request?: PostSetupV1ServicesIdUploadimageRequests;
}


export class PostSetupV1ServicesIdUploadimageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceViewModel?: shared.ServiceViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
