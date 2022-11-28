import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkAppliancePortPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portId" })
  portId: string;
}


export class GetNetworkAppliancePortRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkAppliancePortPathParams;
}


export class GetNetworkAppliancePortResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkAppliancePort200ApplicationJsonObject?: Map<string, any>;
}
