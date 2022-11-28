import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ObjectStorageClusterStatusEnum {
    Available = "available",
    Unavailable = "unavailable"
}
/**
 * An Object Storage Cluster
**/
export declare class ObjectStorageCluster extends SpeakeasyBase {
    domain?: string;
    id?: string;
    region?: string;
    staticSiteDomain?: string;
    status?: ObjectStorageClusterStatusEnum;
}
