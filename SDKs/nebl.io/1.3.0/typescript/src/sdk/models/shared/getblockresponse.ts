import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBlockResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=bits" })
  bits?: string;

  @Metadata({ data: "json, name=confirmations" })
  confirmations?: number;

  @Metadata({ data: "json, name=difficulty" })
  difficulty?: number;

  @Metadata({ data: "json, name=hash" })
  hash?: string;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=merkleroot" })
  merkleroot?: string;

  @Metadata({ data: "json, name=nextblockhash" })
  nextblockhash?: string;

  @Metadata({ data: "json, name=nonce" })
  nonce?: number;

  @Metadata({ data: "json, name=previousblockhash" })
  previousblockhash?: string;

  @Metadata({ data: "json, name=reward" })
  reward?: number;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=time" })
  time?: number;

  @Metadata({ data: "json, name=tx" })
  tx?: string[];

  @Metadata({ data: "json, name=version" })
  version?: number;
}
