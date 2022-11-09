import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1ResourcesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1ResourcesIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=googleAuthReturnUrl" })
  googleAuthReturnUrl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outlookAuthReturnUrl" })
  outlookAuthReturnUrl?: string;
}


export class GetSetupV1ResourcesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1ResourcesIdPathParams;

  @Metadata()
  queryParams: GetSetupV1ResourcesIdQueryParams;
}


export class GetSetupV1ResourcesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceViewModel?: shared.ResourceViewModel;

  @Metadata()
  statusCode: number;
}
