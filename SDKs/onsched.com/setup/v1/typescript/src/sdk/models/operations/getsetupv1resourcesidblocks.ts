import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSetupV1ResourcesIdBlocksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1ResourcesIdBlocksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: Date;
}


export class GetSetupV1ResourcesIdBlocksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1ResourcesIdBlocksPathParams;

  @Metadata()
  queryParams: GetSetupV1ResourcesIdBlocksQueryParams;
}


export class GetSetupV1ResourcesIdBlocksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceBlockListViewModel?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
