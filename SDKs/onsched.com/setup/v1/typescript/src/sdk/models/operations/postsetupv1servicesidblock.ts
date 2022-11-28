import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1ServicesIdBlockPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1ServicesIdBlockRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  serviceBlockInputModel?: shared.ServiceBlockInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  serviceBlockInputModel1?: shared.ServiceBlockInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  serviceBlockInputModel2?: shared.ServiceBlockInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  serviceBlockInputModel3?: shared.ServiceBlockInputModel;
}


export class PostSetupV1ServicesIdBlockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSetupV1ServicesIdBlockPathParams;

  @SpeakeasyMetadata()
  request?: PostSetupV1ServicesIdBlockRequests;
}


export class PostSetupV1ServicesIdBlockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceBlockViewModel?: shared.ServiceBlockViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
