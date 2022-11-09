import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSetupV1ResourcesIdAllocationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1ResourcesIdAllocationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: Date;
}


export class GetSetupV1ResourcesIdAllocationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1ResourcesIdAllocationsPathParams;

  @Metadata()
  queryParams: GetSetupV1ResourcesIdAllocationsQueryParams;
}


export class GetSetupV1ResourcesIdAllocationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceAllocationListViewModel?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
