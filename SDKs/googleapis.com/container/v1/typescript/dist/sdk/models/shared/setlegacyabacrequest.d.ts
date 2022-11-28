import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SetLegacyAbacRequest enables or disables the ABAC authorization mechanism for a cluster.
**/
export declare class SetLegacyAbacRequest extends SpeakeasyBase {
    clusterId?: string;
    enabled?: boolean;
    name?: string;
    projectId?: string;
    zone?: string;
}
