import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateOrganizationConfigTemplateSwitchProfilePortPathParams extends SpeakeasyBase {
    configTemplateId: string;
    organizationId: string;
    portId: string;
    profileId: string;
}
export declare enum UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum {
    Open = "Open",
    CustomAccessPolicy = "Custom access policy",
    MacAllowList = "MAC allow list",
    StickyMacAllowList = "Sticky MAC allow list"
}
export declare enum UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum {
    Disabled = "disabled",
    RootGuard = "root guard",
    BpduGuard = "bpdu guard",
    LoopGuard = "loop guard"
}
export declare enum UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum {
    Trunk = "trunk",
    Access = "access"
}
export declare enum UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum {
    AlertOnly = "Alert only",
    Enforce = "Enforce"
}
export declare class UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody extends SpeakeasyBase {
    accessPolicyNumber?: number;
    accessPolicyType?: UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum;
    allowedVlans?: string;
    enabled?: boolean;
    flexibleStackingEnabled?: boolean;
    isolationEnabled?: boolean;
    linkNegotiation?: string;
    macAllowList?: string[];
    name?: string;
    poeEnabled?: boolean;
    portScheduleId?: string;
    rstpEnabled?: boolean;
    stickyMacAllowList?: string[];
    stickyMacAllowListLimit?: number;
    stormControlEnabled?: boolean;
    stpGuard?: UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum;
    tags?: string[];
    type?: UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum;
    udld?: UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum;
    vlan?: number;
    voiceVlan?: number;
}
export declare class UpdateOrganizationConfigTemplateSwitchProfilePortRequest extends SpeakeasyBase {
    pathParams: UpdateOrganizationConfigTemplateSwitchProfilePortPathParams;
    request?: UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody;
}
export declare class UpdateOrganizationConfigTemplateSwitchProfilePortResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateOrganizationConfigTemplateSwitchProfilePort200ApplicationJsonObject?: Map<string, any>;
}
