import { SpeakeasyBase } from "../../../internal/utils";
export declare class WritableConfigContextInput extends SpeakeasyBase {
    data: string;
    description?: string;
    isActive?: boolean;
    name: string;
    platforms?: number[];
    regions?: number[];
    roles?: number[];
    sites?: number[];
    tenantGroups?: number[];
    tenants?: number[];
    weight?: number;
}
