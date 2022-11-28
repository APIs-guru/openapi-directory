import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CompleteIPRotationRequest moves the cluster master back into single-IP mode.
**/
export declare class CompleteIpRotationRequest extends SpeakeasyBase {
    clusterId?: string;
    name?: string;
    projectId?: string;
    zone?: string;
}
