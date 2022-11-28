import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SendTokenRequestFlags
/** 
 * Object representing flags that potentialy modify this transaction
**/
export class SendTokenRequestFlags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=splitChange" })
  splitChange?: boolean;
}


export class SendTokenRequestMetadataEncryptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=pubkey" })
  pubkey?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// SendTokenRequestMetadataRulesExpiration
/** 
 * Object describing expiration rules of the token
**/
export class SendTokenRequestMetadataRulesExpiration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=validUntil" })
  validUntil?: number;
}


export class SendTokenRequestMetadataRulesFeesItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=tokenId" })
  tokenId?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class SendTokenRequestMetadataRulesFees extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: SendTokenRequestMetadataRulesFeesItems })
  items?: SendTokenRequestMetadataRulesFeesItems[];

  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked?: boolean;
}


export class SendTokenRequestMetadataRulesHolders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked?: boolean;
}


// SendTokenRequestMetadataRules
/** 
 * Object describing token rules
**/
export class SendTokenRequestMetadataRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: SendTokenRequestMetadataRulesExpiration;

  @SpeakeasyMetadata({ data: "json, name=fees" })
  fees?: SendTokenRequestMetadataRulesFees;

  @SpeakeasyMetadata({ data: "json, name=holders", elemType: SendTokenRequestMetadataRulesHolders })
  holders?: SendTokenRequestMetadataRulesHolders[];
}


export class SendTokenRequestMetadataUrls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataHash" })
  dataHash?: string;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class SendTokenRequestMetadataUserDataMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// SendTokenRequestMetadataUserData
/** 
 * Metadata set by user on token
**/
export class SendTokenRequestMetadataUserData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta", elemType: SendTokenRequestMetadataUserDataMeta })
  meta?: SendTokenRequestMetadataUserDataMeta[];
}


// SendTokenRequestMetadata
/** 
 * Object representing all metadata at token issuance
**/
export class SendTokenRequestMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=encryptions", elemType: SendTokenRequestMetadataEncryptions })
  encryptions?: SendTokenRequestMetadataEncryptions[];

  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer?: string;

  @SpeakeasyMetadata({ data: "json, name=rules" })
  rules?: SendTokenRequestMetadataRules;

  @SpeakeasyMetadata({ data: "json, name=tokenName" })
  tokenName?: string;

  @SpeakeasyMetadata({ data: "json, name=urls", elemType: SendTokenRequestMetadataUrls })
  urls?: SendTokenRequestMetadataUrls[];

  @SpeakeasyMetadata({ data: "json, name=userData" })
  userData?: SendTokenRequestMetadataUserData;
}


export class SendTokenRequestTo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=tokenId" })
  tokenId?: string;
}


export class SendTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fee" })
  fee: number;

  @SpeakeasyMetadata({ data: "json, name=flags" })
  flags?: SendTokenRequestFlags;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: SendTokenRequestMetadata;

  @SpeakeasyMetadata({ data: "json, name=sendutxo" })
  sendutxo?: string[];

  @SpeakeasyMetadata({ data: "json, name=to", elemType: SendTokenRequestTo })
  to: SendTokenRequestTo[];
}
