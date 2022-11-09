import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AllowedIpRange
/** 
 * Allowed IP range with user-provided description.
**/
export class AllowedIpRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
