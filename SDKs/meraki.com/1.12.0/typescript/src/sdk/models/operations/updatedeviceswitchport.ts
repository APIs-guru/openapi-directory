import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDeviceSwitchPortPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=portId" })
  portId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}

export enum UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum {
    Open = "Open"
,    CustomAccessPolicy = "Custom access policy"
,    MacAllowList = "MAC allow list"
,    StickyMacAllowList = "Sticky MAC allow list"
}

export enum UpdateDeviceSwitchPortRequestBodyStpGuardEnum {
    Disabled = "disabled"
,    RootGuard = "root guard"
,    BpduGuard = "bpdu guard"
,    LoopGuard = "loop guard"
}

export enum UpdateDeviceSwitchPortRequestBodyTypeEnum {
    Trunk = "trunk"
,    Access = "access"
}

export enum UpdateDeviceSwitchPortRequestBodyUdldEnum {
    AlertOnly = "Alert only"
,    Enforce = "Enforce"
}


export class UpdateDeviceSwitchPortRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessPolicyNumber" })
  accessPolicyNumber?: number;

  @Metadata({ data: "json, name=accessPolicyType" })
  accessPolicyType?: UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum;

  @Metadata({ data: "json, name=allowedVlans" })
  allowedVlans?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=flexibleStackingEnabled" })
  flexibleStackingEnabled?: boolean;

  @Metadata({ data: "json, name=isolationEnabled" })
  isolationEnabled?: boolean;

  @Metadata({ data: "json, name=linkNegotiation" })
  linkNegotiation?: string;

  @Metadata({ data: "json, name=macAllowList" })
  macAllowList?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=poeEnabled" })
  poeEnabled?: boolean;

  @Metadata({ data: "json, name=portScheduleId" })
  portScheduleId?: string;

  @Metadata({ data: "json, name=rstpEnabled" })
  rstpEnabled?: boolean;

  @Metadata({ data: "json, name=stickyMacAllowList" })
  stickyMacAllowList?: string[];

  @Metadata({ data: "json, name=stickyMacAllowListLimit" })
  stickyMacAllowListLimit?: number;

  @Metadata({ data: "json, name=stormControlEnabled" })
  stormControlEnabled?: boolean;

  @Metadata({ data: "json, name=stpGuard" })
  stpGuard?: UpdateDeviceSwitchPortRequestBodyStpGuardEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=type" })
  type?: UpdateDeviceSwitchPortRequestBodyTypeEnum;

  @Metadata({ data: "json, name=udld" })
  udld?: UpdateDeviceSwitchPortRequestBodyUdldEnum;

  @Metadata({ data: "json, name=vlan" })
  vlan?: number;

  @Metadata({ data: "json, name=voiceVlan" })
  voiceVlan?: number;
}


export class UpdateDeviceSwitchPortRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDeviceSwitchPortPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateDeviceSwitchPortRequestBody;
}


export class UpdateDeviceSwitchPortResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDeviceSwitchPort200ApplicationJsonObject?: Map<string, any>;
}
