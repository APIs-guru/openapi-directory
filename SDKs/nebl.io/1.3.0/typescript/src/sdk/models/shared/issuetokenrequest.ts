import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


// IssueTokenRequestFlags
/** 
 * Object representing flags that potentialy modify this transaction
**/
export class IssueTokenRequestFlags extends SpeakeasyBase {
  @Metadata({ data: "json, name=splitChange" })
  splitChange?: boolean;
}


export class IssueTokenRequestMetadataEncryptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=pubkey" })
  pubkey?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


// IssueTokenRequestMetadataRulesExpiration
/** 
 * Object describing expiration rules of the token
**/
export class IssueTokenRequestMetadataRulesExpiration extends SpeakeasyBase {
  @Metadata({ data: "json, name=locked" })
  locked?: boolean;

  @Metadata({ data: "json, name=validUntil" })
  validUntil?: number;
}


export class IssueTokenRequestMetadataRulesFeesItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=tokenId" })
  tokenId?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class IssueTokenRequestMetadataRulesFees extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.IssueTokenRequestMetadataRulesFeesItems })
  items?: IssueTokenRequestMetadataRulesFeesItems[];

  @Metadata({ data: "json, name=locked" })
  locked?: boolean;
}


export class IssueTokenRequestMetadataRulesHolders extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=locked" })
  locked?: boolean;
}


// IssueTokenRequestMetadataRules
/** 
 * Object describing token rules
**/
export class IssueTokenRequestMetadataRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiration" })
  expiration?: IssueTokenRequestMetadataRulesExpiration;

  @Metadata({ data: "json, name=fees" })
  fees?: IssueTokenRequestMetadataRulesFees;

  @Metadata({ data: "json, name=holders", elemType: shared.IssueTokenRequestMetadataRulesHolders })
  holders?: IssueTokenRequestMetadataRulesHolders[];
}


export class IssueTokenRequestMetadataUrls extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataHash" })
  dataHash?: string;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class IssueTokenRequestMetadataUserDataMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


// IssueTokenRequestMetadataUserData
/** 
 * Metadata set by user on token
**/
export class IssueTokenRequestMetadataUserData extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta", elemType: shared.IssueTokenRequestMetadataUserDataMeta })
  meta?: IssueTokenRequestMetadataUserDataMeta[];
}


// IssueTokenRequestMetadata
/** 
 * Object representing all metadata at token issuance
**/
export class IssueTokenRequestMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=encryptions", elemType: shared.IssueTokenRequestMetadataEncryptions })
  encryptions?: IssueTokenRequestMetadataEncryptions[];

  @Metadata({ data: "json, name=issuer" })
  issuer?: string;

  @Metadata({ data: "json, name=rules" })
  rules?: IssueTokenRequestMetadataRules;

  @Metadata({ data: "json, name=tokenName" })
  tokenName?: string;

  @Metadata({ data: "json, name=urls", elemType: shared.IssueTokenRequestMetadataUrls })
  urls?: IssueTokenRequestMetadataUrls[];

  @Metadata({ data: "json, name=userData" })
  userData?: IssueTokenRequestMetadataUserData;
}


export class IssueTokenRequestTransfer extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=amount" })
  amount?: number;
}


export class IssueTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=divisibility" })
  divisibility: number;

  @Metadata({ data: "json, name=fee" })
  fee: number;

  @Metadata({ data: "json, name=flags" })
  flags?: IssueTokenRequestFlags;

  @Metadata({ data: "json, name=issueAddress" })
  issueAddress: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: IssueTokenRequestMetadata;

  @Metadata({ data: "json, name=reissuable" })
  reissuable: boolean;

  @Metadata({ data: "json, name=transfer", elemType: shared.IssueTokenRequestTransfer })
  transfer: IssueTokenRequestTransfer[];
}
