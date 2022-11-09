import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSwitchDscpToCosMappingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSwitchDscpToCosMappingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSwitchDscpToCosMappingsPathParams;
}


export class GetNetworkSwitchDscpToCosMappingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSwitchDscpToCosMappings200ApplicationJsonObject?: Map<string, any>;
}
