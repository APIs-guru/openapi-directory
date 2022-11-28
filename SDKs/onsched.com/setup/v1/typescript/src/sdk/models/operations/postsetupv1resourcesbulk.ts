import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1ResourcesBulkQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=googleAuthReturnUrl" })
  googleAuthReturnUrl?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outlookAuthReturnUrl" })
  outlookAuthReturnUrl?: string;
}


export class PostSetupV1ResourcesBulkRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  resourcesInputModel?: Map<string, any>;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  resourcesInputModel1?: Map<string, any>;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  resourcesInputModel2?: Map<string, any>;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  resourcesInputModel3?: Map<string, any>;
}


export class PostSetupV1ResourcesBulkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostSetupV1ResourcesBulkQueryParams;

  @SpeakeasyMetadata()
  request?: PostSetupV1ResourcesBulkRequests;
}


export class PostSetupV1ResourcesBulkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ResourceViewModel })
  resourceViewModels?: shared.ResourceViewModel[];

  @SpeakeasyMetadata()
  statusCode: number;
}
