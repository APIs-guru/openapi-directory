import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Account
/** 
 * Represents a Google Tag Manager Account.
**/
export class Account extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=shareData" })
  shareData?: boolean;

  @Metadata({ data: "json, name=tagManagerUrl" })
  tagManagerUrl?: string;
}
