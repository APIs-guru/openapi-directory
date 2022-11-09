import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkFirmwareUpgradesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkFirmwareUpgradesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkFirmwareUpgradesPathParams;
}


export class GetNetworkFirmwareUpgradesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkFirmwareUpgrades200ApplicationJsonObject?: Map<string, any>;
}
