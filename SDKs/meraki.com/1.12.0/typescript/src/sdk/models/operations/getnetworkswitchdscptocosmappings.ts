import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkSwitchDscpToCosMappingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSwitchDscpToCosMappingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkSwitchDscpToCosMappingsPathParams;
}


export class GetNetworkSwitchDscpToCosMappingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkSwitchDscpToCosMappings200ApplicationJsonObject?: Map<string, any>;
}
