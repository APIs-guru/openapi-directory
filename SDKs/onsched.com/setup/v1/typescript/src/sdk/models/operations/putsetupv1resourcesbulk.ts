import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSetupV1ResourcesBulkQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=googleAuthReturnUrl" })
  googleAuthReturnUrl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outlookAuthReturnUrl" })
  outlookAuthReturnUrl?: string;
}


export class PutSetupV1ResourcesBulkRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  resourcesUpdateModel?: Map<string, any>;

  @Metadata({ data: "request, media_type=application/json" })
  resourcesUpdateModel1?: Map<string, any>;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  resourcesUpdateModel2?: Map<string, any>;

  @Metadata({ data: "request, media_type=text/json" })
  resourcesUpdateModel3?: Map<string, any>;
}


export class PutSetupV1ResourcesBulkRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PutSetupV1ResourcesBulkQueryParams;

  @Metadata()
  request?: PutSetupV1ResourcesBulkRequests;
}


export class PutSetupV1ResourcesBulkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ResourceViewModel })
  resourceViewModels?: shared.ResourceViewModel[];

  @Metadata()
  statusCode: number;
}
