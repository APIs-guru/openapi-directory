import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSetupV1ResourcesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1ResourcesIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=googleAuthReturnUrl" })
  googleAuthReturnUrl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outlookAuthReturnUrl" })
  outlookAuthReturnUrl?: string;
}


export class PutSetupV1ResourcesIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  resourceUpdateModel?: shared.ResourceUpdateModel;

  @Metadata({ data: "request, media_type=application/json" })
  resourceUpdateModel1?: shared.ResourceUpdateModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  resourceUpdateModel2?: shared.ResourceUpdateModel;

  @Metadata({ data: "request, media_type=text/json" })
  resourceUpdateModel3?: shared.ResourceUpdateModel;
}


export class PutSetupV1ResourcesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSetupV1ResourcesIdPathParams;

  @Metadata()
  queryParams: PutSetupV1ResourcesIdQueryParams;

  @Metadata()
  request?: PutSetupV1ResourcesIdRequests;
}


export class PutSetupV1ResourcesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceViewModel?: shared.ResourceViewModel;

  @Metadata()
  statusCode: number;
}
