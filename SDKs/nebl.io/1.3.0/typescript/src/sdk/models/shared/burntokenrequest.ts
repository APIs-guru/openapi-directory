import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BurnTokenRequestBurn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=tokenId" })
  tokenId?: string;
}


export class BurnTokenRequestTransfer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=tokenId" })
  tokenId?: string;
}


export class BurnTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=burn", elemType: BurnTokenRequestBurn })
  burn: BurnTokenRequestBurn[];

  @SpeakeasyMetadata({ data: "json, name=fee" })
  fee: number;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string[];

  @SpeakeasyMetadata({ data: "json, name=transfer", elemType: BurnTokenRequestTransfer })
  transfer?: BurnTokenRequestTransfer[];
}
