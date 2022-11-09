import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResponsePolicyGkeCluster } from "./responsepolicygkecluster";
import { ResponsePolicyNetwork } from "./responsepolicynetwork";


// ResponsePolicy
/** 
 * A Response Policy is a collection of selectors that apply to queries made against one or more Virtual Private Cloud networks.
**/
export class ResponsePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=gkeClusters", elemType: shared.ResponsePolicyGkeCluster })
  gkeClusters?: ResponsePolicyGkeCluster[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=networks", elemType: shared.ResponsePolicyNetwork })
  networks?: ResponsePolicyNetwork[];

  @Metadata({ data: "json, name=responsePolicyName" })
  responsePolicyName?: string;
}
