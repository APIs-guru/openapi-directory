import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BurnTokenRequestBurn extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=tokenId" })
  tokenId?: string;
}


export class BurnTokenRequestTransfer extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=tokenId" })
  tokenId?: string;
}


export class BurnTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=burn", elemType: shared.BurnTokenRequestBurn })
  burn: BurnTokenRequestBurn[];

  @Metadata({ data: "json, name=fee" })
  fee: number;

  @Metadata({ data: "json, name=from" })
  from?: string[];

  @Metadata({ data: "json, name=transfer", elemType: shared.BurnTokenRequestTransfer })
  transfer?: BurnTokenRequestTransfer[];
}
