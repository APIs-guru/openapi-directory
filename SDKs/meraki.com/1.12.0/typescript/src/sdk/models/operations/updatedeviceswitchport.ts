import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateDeviceSwitchPortPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portId" })
  portId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}

export enum UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum {
    Open = "Open",
    CustomAccessPolicy = "Custom access policy",
    MacAllowList = "MAC allow list",
    StickyMacAllowList = "Sticky MAC allow list"
}

export enum UpdateDeviceSwitchPortRequestBodyStpGuardEnum {
    Disabled = "disabled",
    RootGuard = "root guard",
    BpduGuard = "bpdu guard",
    LoopGuard = "loop guard"
}

export enum UpdateDeviceSwitchPortRequestBodyTypeEnum {
    Trunk = "trunk",
    Access = "access"
}

export enum UpdateDeviceSwitchPortRequestBodyUdldEnum {
    AlertOnly = "Alert only",
    Enforce = "Enforce"
}


export class UpdateDeviceSwitchPortRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessPolicyNumber" })
  accessPolicyNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=accessPolicyType" })
  accessPolicyType?: UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=allowedVlans" })
  allowedVlans?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=flexibleStackingEnabled" })
  flexibleStackingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isolationEnabled" })
  isolationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=linkNegotiation" })
  linkNegotiation?: string;

  @SpeakeasyMetadata({ data: "json, name=macAllowList" })
  macAllowList?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=poeEnabled" })
  poeEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=portScheduleId" })
  portScheduleId?: string;

  @SpeakeasyMetadata({ data: "json, name=rstpEnabled" })
  rstpEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=stickyMacAllowList" })
  stickyMacAllowList?: string[];

  @SpeakeasyMetadata({ data: "json, name=stickyMacAllowListLimit" })
  stickyMacAllowListLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=stormControlEnabled" })
  stormControlEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=stpGuard" })
  stpGuard?: UpdateDeviceSwitchPortRequestBodyStpGuardEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UpdateDeviceSwitchPortRequestBodyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=udld" })
  udld?: UpdateDeviceSwitchPortRequestBodyUdldEnum;

  @SpeakeasyMetadata({ data: "json, name=vlan" })
  vlan?: number;

  @SpeakeasyMetadata({ data: "json, name=voiceVlan" })
  voiceVlan?: number;
}


export class UpdateDeviceSwitchPortRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDeviceSwitchPortPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateDeviceSwitchPortRequestBody;
}


export class UpdateDeviceSwitchPortResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateDeviceSwitchPort200ApplicationJsonObject?: Map<string, any>;
}
