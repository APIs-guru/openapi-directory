import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSetupV1CalendarsIdServicesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1CalendarsIdServicesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetSetupV1CalendarsIdServicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSetupV1CalendarsIdServicesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSetupV1CalendarsIdServicesQueryParams;
}


export class GetSetupV1CalendarsIdServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceListViewModel?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
