import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSetupV1ResourcesIdBlocksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1ResourcesIdBlocksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: Date;
}


export class GetSetupV1ResourcesIdBlocksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSetupV1ResourcesIdBlocksPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSetupV1ResourcesIdBlocksQueryParams;
}


export class GetSetupV1ResourcesIdBlocksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceBlockListViewModel?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
