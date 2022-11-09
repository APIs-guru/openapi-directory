import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkSwitchMtuPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkSwitchMtuRequestBodyOverrides extends SpeakeasyBase {
  @Metadata({ data: "json, name=mtuSize" })
  mtuSize: number;

  @Metadata({ data: "json, name=switchProfiles" })
  switchProfiles?: string[];

  @Metadata({ data: "json, name=switches" })
  switches?: string[];
}


export class UpdateNetworkSwitchMtuRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultMtuSize" })
  defaultMtuSize?: number;

  @Metadata({ data: "json, name=overrides", elemType: operations.UpdateNetworkSwitchMtuRequestBodyOverrides })
  overrides?: UpdateNetworkSwitchMtuRequestBodyOverrides[];
}


export class UpdateNetworkSwitchMtuRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkSwitchMtuPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchMtuRequestBody;
}


export class UpdateNetworkSwitchMtuResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkSwitchMtu200ApplicationJsonObject?: Map<string, any>;
}
