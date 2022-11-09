import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


// GetTokenMetadataResponseMetadataOfIssuanceDataUserData
/** 
 * Metadata set by user on token
**/
export class GetTokenMetadataResponseMetadataOfIssuanceDataUserData extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta", elemType: shared.GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta })
  meta?: GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta[];
}


export class GetTokenMetadataResponseMetadataOfIssuanceData extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=issuer" })
  issuer?: string;

  @Metadata({ data: "json, name=tokenName" })
  tokenName?: string;

  @Metadata({ data: "json, name=userData" })
  userData?: GetTokenMetadataResponseMetadataOfIssuanceDataUserData;
}


// GetTokenMetadataResponseMetadataOfIssuance
/** 
 * Metadata set at issuance
**/
export class GetTokenMetadataResponseMetadataOfIssuance extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: GetTokenMetadataResponseMetadataOfIssuanceData;
}


// GetTokenMetadataResponseMetadataOfUtxoUserData
/** 
 * Metadata set by user on token for UTXO
**/
export class GetTokenMetadataResponseMetadataOfUtxoUserData extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: Map<string, any>[];
}


// GetTokenMetadataResponseMetadataOfUtxo
/** 
 * Metadata set for UTXO
**/
export class GetTokenMetadataResponseMetadataOfUtxo extends SpeakeasyBase {
  @Metadata({ data: "json, name=userData" })
  userData?: GetTokenMetadataResponseMetadataOfUtxoUserData;
}


export class GetTokenMetadataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregationPolicy" })
  aggregationPolicy?: string;

  @Metadata({ data: "json, name=divisibility" })
  divisibility?: number;

  @Metadata({ data: "json, name=firstBlock" })
  firstBlock?: number;

  @Metadata({ data: "json, name=initialIssuanceAmount" })
  initialIssuanceAmount?: number;

  @Metadata({ data: "json, name=issuanceTxid" })
  issuanceTxid?: string;

  @Metadata({ data: "json, name=issueAddress" })
  issueAddress?: string;

  @Metadata({ data: "json, name=lockStatus" })
  lockStatus?: boolean;

  @Metadata({ data: "json, name=metadataOfIssuance" })
  metadataOfIssuance?: GetTokenMetadataResponseMetadataOfIssuance;

  @Metadata({ data: "json, name=metadataOfUtxo" })
  metadataOfUtxo?: GetTokenMetadataResponseMetadataOfUtxo;

  @Metadata({ data: "json, name=numOfBurns" })
  numOfBurns?: number;

  @Metadata({ data: "json, name=numOfHolders" })
  numOfHolders?: number;

  @Metadata({ data: "json, name=numOfIssuance" })
  numOfIssuance?: number;

  @Metadata({ data: "json, name=numOfTransfers" })
  numOfTransfers?: number;

  @Metadata({ data: "json, name=someUtxo" })
  someUtxo?: string;

  @Metadata({ data: "json, name=tokenId" })
  tokenId?: string;

  @Metadata({ data: "json, name=totalSupply" })
  totalSupply?: number;
}
