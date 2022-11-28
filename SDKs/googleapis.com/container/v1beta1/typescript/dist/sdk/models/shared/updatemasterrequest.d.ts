import { SpeakeasyBase } from "../../../internal/utils";
/**
 * UpdateMasterRequest updates the master of the cluster.
**/
export declare class UpdateMasterRequest extends SpeakeasyBase {
    clusterId?: string;
    masterVersion?: string;
    name?: string;
    projectId?: string;
    zone?: string;
}
