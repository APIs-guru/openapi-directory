import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Node kubelet configs.
**/
export declare class NodeKubeletConfig extends SpeakeasyBase {
    cpuCfsQuota?: boolean;
    cpuCfsQuotaPeriod?: string;
    cpuManagerPolicy?: string;
    podPidsLimit?: string;
}
