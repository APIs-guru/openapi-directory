import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NodeKubeletConfig
/** 
 * Node kubelet configs.
**/
export class NodeKubeletConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpuCfsQuota" })
  cpuCfsQuota?: boolean;

  @Metadata({ data: "json, name=cpuCfsQuotaPeriod" })
  cpuCfsQuotaPeriod?: string;

  @Metadata({ data: "json, name=cpuManagerPolicy" })
  cpuManagerPolicy?: string;

  @Metadata({ data: "json, name=podPidsLimit" })
  podPidsLimit?: string;
}
