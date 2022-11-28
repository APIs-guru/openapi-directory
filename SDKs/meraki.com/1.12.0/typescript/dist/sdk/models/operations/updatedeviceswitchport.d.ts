import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateDeviceSwitchPortPathParams extends SpeakeasyBase {
    portId: string;
    serial: string;
}
export declare enum UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum {
    Open = "Open",
    CustomAccessPolicy = "Custom access policy",
    MacAllowList = "MAC allow list",
    StickyMacAllowList = "Sticky MAC allow list"
}
export declare enum UpdateDeviceSwitchPortRequestBodyStpGuardEnum {
    Disabled = "disabled",
    RootGuard = "root guard",
    BpduGuard = "bpdu guard",
    LoopGuard = "loop guard"
}
export declare enum UpdateDeviceSwitchPortRequestBodyTypeEnum {
    Trunk = "trunk",
    Access = "access"
}
export declare enum UpdateDeviceSwitchPortRequestBodyUdldEnum {
    AlertOnly = "Alert only",
    Enforce = "Enforce"
}
export declare class UpdateDeviceSwitchPortRequestBody extends SpeakeasyBase {
    accessPolicyNumber?: number;
    accessPolicyType?: UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum;
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
    stpGuard?: UpdateDeviceSwitchPortRequestBodyStpGuardEnum;
    tags?: string[];
    type?: UpdateDeviceSwitchPortRequestBodyTypeEnum;
    udld?: UpdateDeviceSwitchPortRequestBodyUdldEnum;
    vlan?: number;
    voiceVlan?: number;
}
export declare class UpdateDeviceSwitchPortRequest extends SpeakeasyBase {
    pathParams: UpdateDeviceSwitchPortPathParams;
    request?: UpdateDeviceSwitchPortRequestBody;
}
export declare class UpdateDeviceSwitchPortResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateDeviceSwitchPort200ApplicationJsonObject?: Map<string, any>;
}
