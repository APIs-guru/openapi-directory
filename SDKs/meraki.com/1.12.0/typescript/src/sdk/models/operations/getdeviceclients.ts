import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceClientsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceClientsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetDeviceClientsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceClientsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDeviceClientsQueryParams;
}


export class GetDeviceClientsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDeviceClients200ApplicationJsonObject?: Map<string, any>;
}
