import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSetupV1ResourcegroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetSetupV1ResourcegroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSetupV1ResourcegroupsQueryParams;
}


export class GetSetupV1ResourcegroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceGroupListViewModel?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
