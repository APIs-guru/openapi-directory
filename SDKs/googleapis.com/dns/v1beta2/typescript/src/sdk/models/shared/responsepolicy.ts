import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResponsePolicyGkeCluster } from "./responsepolicygkecluster";
import { ResponsePolicyNetwork } from "./responsepolicynetwork";



// ResponsePolicy
/** 
 * A Response Policy is a collection of selectors that apply to queries made against one or more Virtual Private Cloud networks.
**/
export class ResponsePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=gkeClusters", elemType: ResponsePolicyGkeCluster })
  gkeClusters?: ResponsePolicyGkeCluster[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=networks", elemType: ResponsePolicyNetwork })
  networks?: ResponsePolicyNetwork[];

  @SpeakeasyMetadata({ data: "json, name=responsePolicyName" })
  responsePolicyName?: string;
}
