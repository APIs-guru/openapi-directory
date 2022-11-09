import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSetupV1ServicesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceGroupId" })
  serviceGroupId?: number;
}


export class GetSetupV1ServicesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSetupV1ServicesQueryParams;
}


export class GetSetupV1ServicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceListViewModel?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
