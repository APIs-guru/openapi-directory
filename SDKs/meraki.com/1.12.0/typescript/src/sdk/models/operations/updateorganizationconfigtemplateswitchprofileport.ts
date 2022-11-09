import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateOrganizationConfigTemplateSwitchProfilePortPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=configTemplateId" })
  configTemplateId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=portId" })
  portId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;
}

export enum UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum {
    Open = "Open"
,    CustomAccessPolicy = "Custom access policy"
,    MacAllowList = "MAC allow list"
,    StickyMacAllowList = "Sticky MAC allow list"
}

export enum UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum {
    Disabled = "disabled"
,    RootGuard = "root guard"
,    BpduGuard = "bpdu guard"
,    LoopGuard = "loop guard"
}

export enum UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum {
    Trunk = "trunk"
,    Access = "access"
}

export enum UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum {
    AlertOnly = "Alert only"
,    Enforce = "Enforce"
}


export class UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessPolicyNumber" })
  accessPolicyNumber?: number;

  @Metadata({ data: "json, name=accessPolicyType" })
  accessPolicyType?: UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum;

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
  stpGuard?: UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=type" })
  type?: UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum;

  @Metadata({ data: "json, name=udld" })
  udld?: UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum;

  @Metadata({ data: "json, name=vlan" })
  vlan?: number;

  @Metadata({ data: "json, name=voiceVlan" })
  voiceVlan?: number;
}


export class UpdateOrganizationConfigTemplateSwitchProfilePortRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateOrganizationConfigTemplateSwitchProfilePortPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody;
}


export class UpdateOrganizationConfigTemplateSwitchProfilePortResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateOrganizationConfigTemplateSwitchProfilePort200ApplicationJsonObject?: Map<string, any>;
}
