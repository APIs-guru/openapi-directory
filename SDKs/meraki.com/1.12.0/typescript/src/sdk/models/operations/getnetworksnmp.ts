import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSnmpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSnmpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSnmpPathParams;
}


export class GetNetworkSnmpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSnmp200ApplicationJsonObject?: Map<string, any>;
}
