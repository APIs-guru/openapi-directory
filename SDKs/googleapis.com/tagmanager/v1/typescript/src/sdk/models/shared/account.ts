import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Account
/** 
 * Represents a Google Tag Manager Account.
**/
export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=shareData" })
  shareData?: boolean;
}
