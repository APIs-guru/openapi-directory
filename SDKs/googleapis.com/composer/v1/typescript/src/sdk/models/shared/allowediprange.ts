import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AllowedIpRange
/** 
 * Allowed IP range with user-provided description.
**/
export class AllowedIpRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
