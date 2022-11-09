import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AvailableVersion
/** 
 * Deprecated.
**/
export class AvailableVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
