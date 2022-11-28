import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatchInstanceFilterGroupLabel } from "./patchinstancefiltergrouplabel";



// PatchInstanceFilter
/** 
 * A filter to target VM instances for patching. The targeted VMs must meet all criteria specified. So if both labels and zones are specified, the patch job targets only VMs with those labels and in those zones.
**/
export class PatchInstanceFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=all" })
  all?: boolean;

  @SpeakeasyMetadata({ data: "json, name=groupLabels", elemType: PatchInstanceFilterGroupLabel })
  groupLabels?: PatchInstanceFilterGroupLabel[];

  @SpeakeasyMetadata({ data: "json, name=instanceNamePrefixes" })
  instanceNamePrefixes?: string[];

  @SpeakeasyMetadata({ data: "json, name=instances" })
  instances?: string[];

  @SpeakeasyMetadata({ data: "json, name=zones" })
  zones?: string[];
}
