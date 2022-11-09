import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSetupV1ResourcegroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetSetupV1ResourcegroupsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSetupV1ResourcegroupsQueryParams;
}


export class GetSetupV1ResourcegroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceGroupListViewModel?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
