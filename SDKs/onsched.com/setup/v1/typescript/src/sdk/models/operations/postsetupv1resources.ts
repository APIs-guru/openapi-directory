import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1ResourcesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=googleAuthReturnUrl" })
  googleAuthReturnUrl?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outlookAuthReturnUrl" })
  outlookAuthReturnUrl?: string;
}


export class PostSetupV1ResourcesRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  resourceInputModel?: shared.ResourceInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  resourceInputModel1?: shared.ResourceInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  resourceInputModel2?: shared.ResourceInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  resourceInputModel3?: shared.ResourceInputModel;
}


export class PostSetupV1ResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostSetupV1ResourcesQueryParams;

  @SpeakeasyMetadata()
  request?: PostSetupV1ResourcesRequests;
}


export class PostSetupV1ResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceViewModel?: shared.ResourceViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
