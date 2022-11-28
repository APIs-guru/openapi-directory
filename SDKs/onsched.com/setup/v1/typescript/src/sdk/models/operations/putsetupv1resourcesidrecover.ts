import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSetupV1ResourcesIdRecoverPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1ResourcesIdRecoverQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=googleAuthReturnUrl" })
  googleAuthReturnUrl?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outlookAuthReturnUrl" })
  outlookAuthReturnUrl?: string;
}


export class PutSetupV1ResourcesIdRecoverRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSetupV1ResourcesIdRecoverPathParams;

  @SpeakeasyMetadata()
  queryParams: PutSetupV1ResourcesIdRecoverQueryParams;
}


export class PutSetupV1ResourcesIdRecoverResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceViewModel?: shared.ResourceViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
