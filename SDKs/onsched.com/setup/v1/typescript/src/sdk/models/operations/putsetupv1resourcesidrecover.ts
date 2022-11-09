import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSetupV1ResourcesIdRecoverPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1ResourcesIdRecoverQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=googleAuthReturnUrl" })
  googleAuthReturnUrl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outlookAuthReturnUrl" })
  outlookAuthReturnUrl?: string;
}


export class PutSetupV1ResourcesIdRecoverRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSetupV1ResourcesIdRecoverPathParams;

  @Metadata()
  queryParams: PutSetupV1ResourcesIdRecoverQueryParams;
}


export class PutSetupV1ResourcesIdRecoverResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceViewModel?: shared.ResourceViewModel;

  @Metadata()
  statusCode: number;
}
