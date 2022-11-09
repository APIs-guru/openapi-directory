import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ECommercePlatformLinkInfo
/** 
 * Additional information required for E_COMMERCE_PLATFORM link type.
**/
export class ECommercePlatformLinkInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=externalAccountId" })
  externalAccountId?: string;
}
