import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AddonsConfig } from "./addonsconfig";


// SetAddonsConfigRequest
/** 
 * SetAddonsConfigRequest sets the addons associated with the cluster.
**/
export class SetAddonsConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=addonsConfig" })
  addonsConfig?: AddonsConfig;

  @Metadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
