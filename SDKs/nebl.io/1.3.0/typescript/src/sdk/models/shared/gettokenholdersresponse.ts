import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTokenHoldersResponseHolders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;
}


export class GetTokenHoldersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregationPolicy" })
  aggregationPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=divibility" })
  divibility?: number;

  @SpeakeasyMetadata({ data: "json, name=holders", elemType: GetTokenHoldersResponseHolders })
  holders?: GetTokenHoldersResponseHolders[];

  @SpeakeasyMetadata({ data: "json, name=lockStatus" })
  lockStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=someUtxo" })
  someUtxo?: string;

  @SpeakeasyMetadata({ data: "json, name=tokenId" })
  tokenId?: string;
}
