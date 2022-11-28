import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSetupV1ResourcesBulkQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=googleAuthReturnUrl" })
  googleAuthReturnUrl?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outlookAuthReturnUrl" })
  outlookAuthReturnUrl?: string;
}


export class PutSetupV1ResourcesBulkRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  resourcesUpdateModel?: Map<string, any>;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  resourcesUpdateModel1?: Map<string, any>;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  resourcesUpdateModel2?: Map<string, any>;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  resourcesUpdateModel3?: Map<string, any>;
}


export class PutSetupV1ResourcesBulkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PutSetupV1ResourcesBulkQueryParams;

  @SpeakeasyMetadata()
  request?: PutSetupV1ResourcesBulkRequests;
}


export class PutSetupV1ResourcesBulkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ResourceViewModel })
  resourceViewModels?: shared.ResourceViewModel[];

  @SpeakeasyMetadata()
  statusCode: number;
}
