import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountFeatures } from "./accountfeatures";



// Account
/** 
 * Represents a Google Tag Manager Account.
**/
export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=features" })
  features?: AccountFeatures;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=shareData" })
  shareData?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tagManagerUrl" })
  tagManagerUrl?: string;
}
