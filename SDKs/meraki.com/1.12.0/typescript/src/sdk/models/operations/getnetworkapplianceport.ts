import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkAppliancePortPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=portId" })
  portId: string;
}


export class GetNetworkAppliancePortRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkAppliancePortPathParams;
}


export class GetNetworkAppliancePortResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkAppliancePort200ApplicationJsonObject?: Map<string, any>;
}
