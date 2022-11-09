import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWirelessAirMarshalPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkWirelessAirMarshalQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetNetworkWirelessAirMarshalRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWirelessAirMarshalPathParams;

  @Metadata()
  queryParams: GetNetworkWirelessAirMarshalQueryParams;
}


export class GetNetworkWirelessAirMarshalResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWirelessAirMarshal200ApplicationJsonObject?: Map<string, any>;
}
