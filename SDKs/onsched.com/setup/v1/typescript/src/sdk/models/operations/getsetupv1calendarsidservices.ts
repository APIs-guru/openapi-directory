import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSetupV1CalendarsIdServicesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1CalendarsIdServicesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetSetupV1CalendarsIdServicesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1CalendarsIdServicesPathParams;

  @Metadata()
  queryParams: GetSetupV1CalendarsIdServicesQueryParams;
}


export class GetSetupV1CalendarsIdServicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceListViewModel?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
