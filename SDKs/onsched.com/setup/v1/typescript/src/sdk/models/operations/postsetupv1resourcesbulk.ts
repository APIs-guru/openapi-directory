import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1ResourcesBulkQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=googleAuthReturnUrl" })
  googleAuthReturnUrl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outlookAuthReturnUrl" })
  outlookAuthReturnUrl?: string;
}


export class PostSetupV1ResourcesBulkRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  resourcesInputModel?: Map<string, any>;

  @Metadata({ data: "request, media_type=application/json" })
  resourcesInputModel1?: Map<string, any>;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  resourcesInputModel2?: Map<string, any>;

  @Metadata({ data: "request, media_type=text/json" })
  resourcesInputModel3?: Map<string, any>;
}


export class PostSetupV1ResourcesBulkRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostSetupV1ResourcesBulkQueryParams;

  @Metadata()
  request?: PostSetupV1ResourcesBulkRequests;
}


export class PostSetupV1ResourcesBulkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ResourceViewModel })
  resourceViewModels?: shared.ResourceViewModel[];

  @Metadata()
  statusCode: number;
}
