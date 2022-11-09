import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSetupV1LocationsIdServicesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1LocationsIdServicesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetSetupV1LocationsIdServicesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1LocationsIdServicesPathParams;

  @Metadata()
  queryParams: GetSetupV1LocationsIdServicesQueryParams;
}


export class GetSetupV1LocationsIdServicesResponse extends SpeakeasyBase {
  @Metadata()
  businessServiceListViewModel?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
