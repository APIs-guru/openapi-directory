import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSetupV1ServicesIdResourcesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1ServicesIdResourcesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=googleAuthReturnUrl" })
  googleAuthReturnUrl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outlookAuthReturnUrl" })
  outlookAuthReturnUrl?: string;
}


export class GetSetupV1ServicesIdResourcesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1ServicesIdResourcesPathParams;

  @Metadata()
  queryParams: GetSetupV1ServicesIdResourcesQueryParams;
}


export class GetSetupV1ServicesIdResourcesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceListViewModel?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
