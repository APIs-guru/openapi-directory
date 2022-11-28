import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Mesh represents a logical configuration grouping for workload to workload communication within a service mesh. Routes that point to mesh dictate how requests are routed within this logical mesh boundary.
**/
export declare class Mesh extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    interceptionPort?: number;
    labels?: Map<string, string>;
    name?: string;
    selfLink?: string;
    updateTime?: string;
}
/**
 * Mesh represents a logical configuration grouping for workload to workload communication within a service mesh. Routes that point to mesh dictate how requests are routed within this logical mesh boundary.
**/
export declare class MeshInput extends SpeakeasyBase {
    description?: string;
    interceptionPort?: number;
    labels?: Map<string, string>;
    name?: string;
}
