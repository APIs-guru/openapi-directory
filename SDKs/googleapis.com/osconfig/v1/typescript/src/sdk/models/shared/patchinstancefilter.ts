import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PatchInstanceFilterGroupLabel } from "./patchinstancefiltergrouplabel";


// PatchInstanceFilter
/** 
 * A filter to target VM instances for patching. The targeted VMs must meet all criteria specified. So if both labels and zones are specified, the patch job targets only VMs with those labels and in those zones.
**/
export class PatchInstanceFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=all" })
  all?: boolean;

  @Metadata({ data: "json, name=groupLabels", elemType: shared.PatchInstanceFilterGroupLabel })
  groupLabels?: PatchInstanceFilterGroupLabel[];

  @Metadata({ data: "json, name=instanceNamePrefixes" })
  instanceNamePrefixes?: string[];

  @Metadata({ data: "json, name=instances" })
  instances?: string[];

  @Metadata({ data: "json, name=zones" })
  zones?: string[];
}
