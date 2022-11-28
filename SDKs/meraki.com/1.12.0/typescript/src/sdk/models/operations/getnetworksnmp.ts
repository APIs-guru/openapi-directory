import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkSnmpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSnmpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkSnmpPathParams;
}


export class GetNetworkSnmpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkSnmp200ApplicationJsonObject?: Map<string, any>;
}
