import { SpeakeasyBase } from "../../../internal/utils";
/**
 * StartIPRotationRequest creates a new IP for the cluster and then performs a node upgrade on each node pool to point to the new IP.
**/
export declare class StartIpRotationRequest extends SpeakeasyBase {
    clusterId?: string;
    name?: string;
    projectId?: string;
    rotateCredentials?: boolean;
    zone?: string;
}
