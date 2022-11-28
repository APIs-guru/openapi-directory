import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ECommercePlatformLinkInfo
/** 
 * Additional information required for E_COMMERCE_PLATFORM link type.
**/
export class ECommercePlatformLinkInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=externalAccountId" })
  externalAccountId?: string;
}
