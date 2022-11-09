import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceClientsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceClientsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetDeviceClientsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceClientsPathParams;

  @Metadata()
  queryParams: GetDeviceClientsQueryParams;
}


export class GetDeviceClientsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceClients200ApplicationJsonObject?: Map<string, any>;
}
