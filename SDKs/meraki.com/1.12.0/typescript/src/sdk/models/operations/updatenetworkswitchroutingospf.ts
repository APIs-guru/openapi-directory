import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkSwitchRoutingOspfPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum {
    Normal = "normal",
    Stub = "stub",
    Nssa = "nssa"
}


export class UpdateNetworkSwitchRoutingOspfRequestBodyAreas extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=areaId" })
  areaId: number;

  @SpeakeasyMetadata({ data: "json, name=areaName" })
  areaName: string;

  @SpeakeasyMetadata({ data: "json, name=areaType" })
  areaType: UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum;
}


// UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey
/** 
 * MD5 authentication credentials. This param is only relevant if md5AuthenticationEnabled is true
**/
export class UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=passphrase" })
  passphrase?: string;
}


export class UpdateNetworkSwitchRoutingOspfRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=areas", elemType: UpdateNetworkSwitchRoutingOspfRequestBodyAreas })
  areas?: UpdateNetworkSwitchRoutingOspfRequestBodyAreas[];

  @SpeakeasyMetadata({ data: "json, name=deadTimerInSeconds" })
  deadTimerInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=helloTimerInSeconds" })
  helloTimerInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=md5AuthenticationEnabled" })
  md5AuthenticationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=md5AuthenticationKey" })
  md5AuthenticationKey?: UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey;
}


export class UpdateNetworkSwitchRoutingOspfRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkSwitchRoutingOspfPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchRoutingOspfRequestBody;
}


export class UpdateNetworkSwitchRoutingOspfResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkSwitchRoutingOspf200ApplicationJsonObject?: Map<string, any>;
}
