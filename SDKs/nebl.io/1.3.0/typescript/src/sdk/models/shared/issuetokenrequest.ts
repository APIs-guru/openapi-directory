import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IssueTokenRequestFlags
/** 
 * Object representing flags that potentialy modify this transaction
**/
export class IssueTokenRequestFlags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=splitChange" })
  splitChange?: boolean;
}


export class IssueTokenRequestMetadataEncryptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=pubkey" })
  pubkey?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// IssueTokenRequestMetadataRulesExpiration
/** 
 * Object describing expiration rules of the token
**/
export class IssueTokenRequestMetadataRulesExpiration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=validUntil" })
  validUntil?: number;
}


export class IssueTokenRequestMetadataRulesFeesItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=tokenId" })
  tokenId?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class IssueTokenRequestMetadataRulesFees extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: IssueTokenRequestMetadataRulesFeesItems })
  items?: IssueTokenRequestMetadataRulesFeesItems[];

  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked?: boolean;
}


export class IssueTokenRequestMetadataRulesHolders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked?: boolean;
}


// IssueTokenRequestMetadataRules
/** 
 * Object describing token rules
**/
export class IssueTokenRequestMetadataRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: IssueTokenRequestMetadataRulesExpiration;

  @SpeakeasyMetadata({ data: "json, name=fees" })
  fees?: IssueTokenRequestMetadataRulesFees;

  @SpeakeasyMetadata({ data: "json, name=holders", elemType: IssueTokenRequestMetadataRulesHolders })
  holders?: IssueTokenRequestMetadataRulesHolders[];
}


export class IssueTokenRequestMetadataUrls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataHash" })
  dataHash?: string;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class IssueTokenRequestMetadataUserDataMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// IssueTokenRequestMetadataUserData
/** 
 * Metadata set by user on token
**/
export class IssueTokenRequestMetadataUserData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta", elemType: IssueTokenRequestMetadataUserDataMeta })
  meta?: IssueTokenRequestMetadataUserDataMeta[];
}


// IssueTokenRequestMetadata
/** 
 * Object representing all metadata at token issuance
**/
export class IssueTokenRequestMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=encryptions", elemType: IssueTokenRequestMetadataEncryptions })
  encryptions?: IssueTokenRequestMetadataEncryptions[];

  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer?: string;

  @SpeakeasyMetadata({ data: "json, name=rules" })
  rules?: IssueTokenRequestMetadataRules;

  @SpeakeasyMetadata({ data: "json, name=tokenName" })
  tokenName?: string;

  @SpeakeasyMetadata({ data: "json, name=urls", elemType: IssueTokenRequestMetadataUrls })
  urls?: IssueTokenRequestMetadataUrls[];

  @SpeakeasyMetadata({ data: "json, name=userData" })
  userData?: IssueTokenRequestMetadataUserData;
}


export class IssueTokenRequestTransfer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;
}


export class IssueTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=divisibility" })
  divisibility: number;

  @SpeakeasyMetadata({ data: "json, name=fee" })
  fee: number;

  @SpeakeasyMetadata({ data: "json, name=flags" })
  flags?: IssueTokenRequestFlags;

  @SpeakeasyMetadata({ data: "json, name=issueAddress" })
  issueAddress: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: IssueTokenRequestMetadata;

  @SpeakeasyMetadata({ data: "json, name=reissuable" })
  reissuable: boolean;

  @SpeakeasyMetadata({ data: "json, name=transfer", elemType: IssueTokenRequestTransfer })
  transfer: IssueTokenRequestTransfer[];
}
