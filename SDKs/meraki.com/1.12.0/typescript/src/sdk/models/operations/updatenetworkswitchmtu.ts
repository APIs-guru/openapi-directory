import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkSwitchMtuPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkSwitchMtuRequestBodyOverrides extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mtuSize" })
  mtuSize: number;

  @SpeakeasyMetadata({ data: "json, name=switchProfiles" })
  switchProfiles?: string[];

  @SpeakeasyMetadata({ data: "json, name=switches" })
  switches?: string[];
}


export class UpdateNetworkSwitchMtuRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultMtuSize" })
  defaultMtuSize?: number;

  @SpeakeasyMetadata({ data: "json, name=overrides", elemType: UpdateNetworkSwitchMtuRequestBodyOverrides })
  overrides?: UpdateNetworkSwitchMtuRequestBodyOverrides[];
}


export class UpdateNetworkSwitchMtuRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkSwitchMtuPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchMtuRequestBody;
}


export class UpdateNetworkSwitchMtuResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkSwitchMtu200ApplicationJsonObject?: Map<string, any>;
}
