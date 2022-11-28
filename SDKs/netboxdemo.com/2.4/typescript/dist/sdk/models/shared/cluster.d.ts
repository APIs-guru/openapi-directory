import { SpeakeasyBase } from "../../../internal/utils";
import { NestedClusterGroup } from "./nestedclustergroup";
import { NestedSite } from "./nestedsite";
import { NestedClusterType } from "./nestedclustertype";
export declare class Cluster extends SpeakeasyBase {
    comments?: string;
    created?: Date;
    customFields?: Map<string, any>;
    group?: NestedClusterGroup;
    id?: number;
    lastUpdated?: Date;
    name: string;
    site?: NestedSite;
    tags?: string[];
    type: NestedClusterType;
}
