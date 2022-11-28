import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateOrganizationConfigTemplateSwitchProfilePortPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configTemplateId" })
  configTemplateId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portId" })
  portId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;
}

export enum UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum {
    Open = "Open",
    CustomAccessPolicy = "Custom access policy",
    MacAllowList = "MAC allow list",
    StickyMacAllowList = "Sticky MAC allow list"
}

export enum UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum {
    Disabled = "disabled",
    RootGuard = "root guard",
    BpduGuard = "bpdu guard",
    LoopGuard = "loop guard"
}

export enum UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum {
    Trunk = "trunk",
    Access = "access"
}

export enum UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum {
    AlertOnly = "Alert only",
    Enforce = "Enforce"
}


export class UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessPolicyNumber" })
  accessPolicyNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=accessPolicyType" })
  accessPolicyType?: UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum;

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
  stpGuard?: UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=udld" })
  udld?: UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum;

  @SpeakeasyMetadata({ data: "json, name=vlan" })
  vlan?: number;

  @SpeakeasyMetadata({ data: "json, name=voiceVlan" })
  voiceVlan?: number;
}


export class UpdateOrganizationConfigTemplateSwitchProfilePortRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateOrganizationConfigTemplateSwitchProfilePortPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody;
}


export class UpdateOrganizationConfigTemplateSwitchProfilePortResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateOrganizationConfigTemplateSwitchProfilePort200ApplicationJsonObject?: Map<string, any>;
}
