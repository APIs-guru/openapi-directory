import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ZypperPatch
/** 
 * Details related to a Zypper Patch.
**/
export class ZypperPatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=patchName" })
  patchName?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: string;

  @Metadata({ data: "json, name=summary" })
  summary?: string;
}
