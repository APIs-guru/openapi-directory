import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableCircuitStatusEnum {
    Planned = "planned",
    Provisioning = "provisioning",
    Active = "active",
    Offline = "offline",
    Deprovisioning = "deprovisioning",
    Decommissioned = "decommissioned"
}
export declare class WritableCircuitInput extends SpeakeasyBase {
    cid: string;
    comments?: string;
    commitRate?: number;
    customFields?: Map<string, any>;
    description?: string;
    installDate?: Date;
    provider: number;
    status?: WritableCircuitStatusEnum;
    tags?: string[];
    tenant?: number;
    type: number;
}
