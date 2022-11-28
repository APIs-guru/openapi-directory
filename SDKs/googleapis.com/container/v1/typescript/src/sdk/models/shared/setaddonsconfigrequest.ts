import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddonsConfig } from "./addonsconfig";



// SetAddonsConfigRequest
/** 
 * SetAddonsConfigRequest sets the addons associated with the cluster.
**/
export class SetAddonsConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addonsConfig" })
  addonsConfig?: AddonsConfig;

  @SpeakeasyMetadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
