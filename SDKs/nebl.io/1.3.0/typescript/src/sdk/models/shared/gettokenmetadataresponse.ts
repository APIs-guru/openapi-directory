import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GetTokenMetadataResponseMetadataOfIssuanceDataUserData
/** 
 * Metadata set by user on token
**/
export class GetTokenMetadataResponseMetadataOfIssuanceDataUserData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta", elemType: GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta })
  meta?: GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta[];
}


export class GetTokenMetadataResponseMetadataOfIssuanceData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer?: string;

  @SpeakeasyMetadata({ data: "json, name=tokenName" })
  tokenName?: string;

  @SpeakeasyMetadata({ data: "json, name=userData" })
  userData?: GetTokenMetadataResponseMetadataOfIssuanceDataUserData;
}


// GetTokenMetadataResponseMetadataOfIssuance
/** 
 * Metadata set at issuance
**/
export class GetTokenMetadataResponseMetadataOfIssuance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetTokenMetadataResponseMetadataOfIssuanceData;
}


// GetTokenMetadataResponseMetadataOfUtxoUserData
/** 
 * Metadata set by user on token for UTXO
**/
export class GetTokenMetadataResponseMetadataOfUtxoUserData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Map<string, any>[];
}


// GetTokenMetadataResponseMetadataOfUtxo
/** 
 * Metadata set for UTXO
**/
export class GetTokenMetadataResponseMetadataOfUtxo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userData" })
  userData?: GetTokenMetadataResponseMetadataOfUtxoUserData;
}


export class GetTokenMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregationPolicy" })
  aggregationPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=divisibility" })
  divisibility?: number;

  @SpeakeasyMetadata({ data: "json, name=firstBlock" })
  firstBlock?: number;

  @SpeakeasyMetadata({ data: "json, name=initialIssuanceAmount" })
  initialIssuanceAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=issuanceTxid" })
  issuanceTxid?: string;

  @SpeakeasyMetadata({ data: "json, name=issueAddress" })
  issueAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=lockStatus" })
  lockStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=metadataOfIssuance" })
  metadataOfIssuance?: GetTokenMetadataResponseMetadataOfIssuance;

  @SpeakeasyMetadata({ data: "json, name=metadataOfUtxo" })
  metadataOfUtxo?: GetTokenMetadataResponseMetadataOfUtxo;

  @SpeakeasyMetadata({ data: "json, name=numOfBurns" })
  numOfBurns?: number;

  @SpeakeasyMetadata({ data: "json, name=numOfHolders" })
  numOfHolders?: number;

  @SpeakeasyMetadata({ data: "json, name=numOfIssuance" })
  numOfIssuance?: number;

  @SpeakeasyMetadata({ data: "json, name=numOfTransfers" })
  numOfTransfers?: number;

  @SpeakeasyMetadata({ data: "json, name=someUtxo" })
  someUtxo?: string;

  @SpeakeasyMetadata({ data: "json, name=tokenId" })
  tokenId?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSupply" })
  totalSupply?: number;
}
