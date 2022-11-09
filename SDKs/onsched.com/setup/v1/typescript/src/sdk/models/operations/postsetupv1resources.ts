import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1ResourcesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=googleAuthReturnUrl" })
  googleAuthReturnUrl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outlookAuthReturnUrl" })
  outlookAuthReturnUrl?: string;
}


export class PostSetupV1ResourcesRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  resourceInputModel?: shared.ResourceInputModel;

  @Metadata({ data: "request, media_type=application/json" })
  resourceInputModel1?: shared.ResourceInputModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  resourceInputModel2?: shared.ResourceInputModel;

  @Metadata({ data: "request, media_type=text/json" })
  resourceInputModel3?: shared.ResourceInputModel;
}


export class PostSetupV1ResourcesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostSetupV1ResourcesQueryParams;

  @Metadata()
  request?: PostSetupV1ResourcesRequests;
}


export class PostSetupV1ResourcesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceViewModel?: shared.ResourceViewModel;

  @Metadata()
  statusCode: number;
}
