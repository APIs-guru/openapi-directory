import { SpeakeasyBase } from "../../../internal/utils";
/**
 * RollbackNodePoolUpgradeRequest rollbacks the previously Aborted or Failed NodePool upgrade. This will be an no-op if the last upgrade successfully completed.
**/
export declare class RollbackNodePoolUpgradeRequest extends SpeakeasyBase {
    clusterId?: string;
    name?: string;
    nodePoolId?: string;
    projectId?: string;
    respectPdb?: boolean;
    zone?: string;
}
