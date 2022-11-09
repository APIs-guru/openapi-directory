import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSetupV1LocationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceId" })
  serviceId?: string;
}


export class GetSetupV1LocationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSetupV1LocationsQueryParams;
}


export class GetSetupV1LocationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  locationListViewModel?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
