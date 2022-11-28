import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ZypperPatch
/** 
 * Details related to a Zypper Patch.
**/
export class ZypperPatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=patchName" })
  patchName?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: string;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;
}
