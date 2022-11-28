import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NodeKubeletConfig
/** 
 * Node kubelet configs.
**/
export class NodeKubeletConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpuCfsQuota" })
  cpuCfsQuota?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cpuCfsQuotaPeriod" })
  cpuCfsQuotaPeriod?: string;

  @SpeakeasyMetadata({ data: "json, name=cpuManagerPolicy" })
  cpuManagerPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=podPidsLimit" })
  podPidsLimit?: string;
}
