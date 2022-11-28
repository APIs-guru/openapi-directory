import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkFirmwareUpgradesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkFirmwareUpgradesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkFirmwareUpgradesPathParams;
}


export class GetNetworkFirmwareUpgradesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkFirmwareUpgrades200ApplicationJsonObject?: Map<string, any>;
}
