import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSetupV1ResourcesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1ResourcesIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=googleAuthReturnUrl" })
  googleAuthReturnUrl?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outlookAuthReturnUrl" })
  outlookAuthReturnUrl?: string;
}


export class PutSetupV1ResourcesIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  resourceUpdateModel?: shared.ResourceUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  resourceUpdateModel1?: shared.ResourceUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  resourceUpdateModel2?: shared.ResourceUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  resourceUpdateModel3?: shared.ResourceUpdateModel;
}


export class PutSetupV1ResourcesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSetupV1ResourcesIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PutSetupV1ResourcesIdQueryParams;

  @SpeakeasyMetadata()
  request?: PutSetupV1ResourcesIdRequests;
}


export class PutSetupV1ResourcesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceViewModel?: shared.ResourceViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
