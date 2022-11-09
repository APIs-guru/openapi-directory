import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


// SendTokenRequestFlags
/** 
 * Object representing flags that potentialy modify this transaction
**/
export class SendTokenRequestFlags extends SpeakeasyBase {
  @Metadata({ data: "json, name=splitChange" })
  splitChange?: boolean;
}


export class SendTokenRequestMetadataEncryptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=pubkey" })
  pubkey?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


// SendTokenRequestMetadataRulesExpiration
/** 
 * Object describing expiration rules of the token
**/
export class SendTokenRequestMetadataRulesExpiration extends SpeakeasyBase {
  @Metadata({ data: "json, name=locked" })
  locked?: boolean;

  @Metadata({ data: "json, name=validUntil" })
  validUntil?: number;
}


export class SendTokenRequestMetadataRulesFeesItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=tokenId" })
  tokenId?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class SendTokenRequestMetadataRulesFees extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.SendTokenRequestMetadataRulesFeesItems })
  items?: SendTokenRequestMetadataRulesFeesItems[];

  @Metadata({ data: "json, name=locked" })
  locked?: boolean;
}


export class SendTokenRequestMetadataRulesHolders extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=locked" })
  locked?: boolean;
}


// SendTokenRequestMetadataRules
/** 
 * Object describing token rules
**/
export class SendTokenRequestMetadataRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiration" })
  expiration?: SendTokenRequestMetadataRulesExpiration;

  @Metadata({ data: "json, name=fees" })
  fees?: SendTokenRequestMetadataRulesFees;

  @Metadata({ data: "json, name=holders", elemType: shared.SendTokenRequestMetadataRulesHolders })
  holders?: SendTokenRequestMetadataRulesHolders[];
}


export class SendTokenRequestMetadataUrls extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataHash" })
  dataHash?: string;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class SendTokenRequestMetadataUserDataMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


// SendTokenRequestMetadataUserData
/** 
 * Metadata set by user on token
**/
export class SendTokenRequestMetadataUserData extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta", elemType: shared.SendTokenRequestMetadataUserDataMeta })
  meta?: SendTokenRequestMetadataUserDataMeta[];
}


// SendTokenRequestMetadata
/** 
 * Object representing all metadata at token issuance
**/
export class SendTokenRequestMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=encryptions", elemType: shared.SendTokenRequestMetadataEncryptions })
  encryptions?: SendTokenRequestMetadataEncryptions[];

  @Metadata({ data: "json, name=issuer" })
  issuer?: string;

  @Metadata({ data: "json, name=rules" })
  rules?: SendTokenRequestMetadataRules;

  @Metadata({ data: "json, name=tokenName" })
  tokenName?: string;

  @Metadata({ data: "json, name=urls", elemType: shared.SendTokenRequestMetadataUrls })
  urls?: SendTokenRequestMetadataUrls[];

  @Metadata({ data: "json, name=userData" })
  userData?: SendTokenRequestMetadataUserData;
}


export class SendTokenRequestTo extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=tokenId" })
  tokenId?: string;
}


export class SendTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fee" })
  fee: number;

  @Metadata({ data: "json, name=flags" })
  flags?: SendTokenRequestFlags;

  @Metadata({ data: "json, name=from" })
  from?: string[];

  @Metadata({ data: "json, name=metadata" })
  metadata?: SendTokenRequestMetadata;

  @Metadata({ data: "json, name=sendutxo" })
  sendutxo?: string[];

  @Metadata({ data: "json, name=to", elemType: shared.SendTokenRequestTo })
  to: SendTokenRequestTo[];
}
