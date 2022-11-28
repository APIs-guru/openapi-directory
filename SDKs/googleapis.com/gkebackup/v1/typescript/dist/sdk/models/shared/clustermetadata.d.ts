import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the GKE cluster from which this Backup was created.
**/
export declare class ClusterMetadata extends SpeakeasyBase {
    anthosVersion?: string;
    backupCrdVersions?: Map<string, string>;
    cluster?: string;
    gkeVersion?: string;
    k8sVersion?: string;
}
