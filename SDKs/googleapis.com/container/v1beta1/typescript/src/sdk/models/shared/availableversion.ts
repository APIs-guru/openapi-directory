import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AvailableVersion
/** 
 * Deprecated.
**/
export class AvailableVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
