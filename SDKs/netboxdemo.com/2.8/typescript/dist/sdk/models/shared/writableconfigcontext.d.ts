import { SpeakeasyBase } from "../../../internal/utils";
export declare class WritableConfigContextInput extends SpeakeasyBase {
    clusterGroups?: number[];
    clusters?: number[];
    data: string;
    description?: string;
    isActive?: boolean;
    name: string;
    platforms?: number[];
    regions?: number[];
    roles?: number[];
    sites?: number[];
    tags?: string[];
    tenantGroups?: number[];
    tenants?: number[];
    weight?: number;
}
