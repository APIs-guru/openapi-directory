import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkSwitchRoutingOspfPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum {
    Normal = "normal"
,    Stub = "stub"
,    Nssa = "nssa"
}


export class UpdateNetworkSwitchRoutingOspfRequestBodyAreas extends SpeakeasyBase {
  @Metadata({ data: "json, name=areaId" })
  areaId: number;

  @Metadata({ data: "json, name=areaName" })
  areaName: string;

  @Metadata({ data: "json, name=areaType" })
  areaType: UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum;
}


// UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey
/** 
 * MD5 authentication credentials. This param is only relevant if md5AuthenticationEnabled is true
**/
export class UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=passphrase" })
  passphrase?: string;
}


export class UpdateNetworkSwitchRoutingOspfRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=areas", elemType: operations.UpdateNetworkSwitchRoutingOspfRequestBodyAreas })
  areas?: UpdateNetworkSwitchRoutingOspfRequestBodyAreas[];

  @Metadata({ data: "json, name=deadTimerInSeconds" })
  deadTimerInSeconds?: number;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=helloTimerInSeconds" })
  helloTimerInSeconds?: number;

  @Metadata({ data: "json, name=md5AuthenticationEnabled" })
  md5AuthenticationEnabled?: boolean;

  @Metadata({ data: "json, name=md5AuthenticationKey" })
  md5AuthenticationKey?: UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey;
}


export class UpdateNetworkSwitchRoutingOspfRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkSwitchRoutingOspfPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchRoutingOspfRequestBody;
}


export class UpdateNetworkSwitchRoutingOspfResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkSwitchRoutingOspf200ApplicationJsonObject?: Map<string, any>;
}
