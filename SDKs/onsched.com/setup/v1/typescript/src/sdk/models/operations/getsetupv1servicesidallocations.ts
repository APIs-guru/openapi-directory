import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSetupV1ServicesIdAllocationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1ServicesIdAllocationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: Date;
}


export class GetSetupV1ServicesIdAllocationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1ServicesIdAllocationsPathParams;

  @Metadata()
  queryParams: GetSetupV1ServicesIdAllocationsQueryParams;
}


export class GetSetupV1ServicesIdAllocationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceAllocationListViewModel?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
