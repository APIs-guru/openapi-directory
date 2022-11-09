import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSetupV1ServicesIdBlocksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1ServicesIdBlocksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: Date;
}


export class GetSetupV1ServicesIdBlocksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1ServicesIdBlocksPathParams;

  @Metadata()
  queryParams: GetSetupV1ServicesIdBlocksQueryParams;
}


export class GetSetupV1ServicesIdBlocksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceBlockListViewModel?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
