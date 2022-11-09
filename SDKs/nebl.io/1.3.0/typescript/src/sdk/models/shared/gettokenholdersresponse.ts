import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTokenHoldersResponseHolders extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=amount" })
  amount?: number;
}


export class GetTokenHoldersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregationPolicy" })
  aggregationPolicy?: string;

  @Metadata({ data: "json, name=divibility" })
  divibility?: number;

  @Metadata({ data: "json, name=holders", elemType: shared.GetTokenHoldersResponseHolders })
  holders?: GetTokenHoldersResponseHolders[];

  @Metadata({ data: "json, name=lockStatus" })
  lockStatus?: boolean;

  @Metadata({ data: "json, name=someUtxo" })
  someUtxo?: string;

  @Metadata({ data: "json, name=tokenId" })
  tokenId?: string;
}
