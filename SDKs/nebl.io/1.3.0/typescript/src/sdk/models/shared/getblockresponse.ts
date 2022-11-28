import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBlockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bits" })
  bits?: string;

  @SpeakeasyMetadata({ data: "json, name=confirmations" })
  confirmations?: number;

  @SpeakeasyMetadata({ data: "json, name=difficulty" })
  difficulty?: number;

  @SpeakeasyMetadata({ data: "json, name=hash" })
  hash?: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=merkleroot" })
  merkleroot?: string;

  @SpeakeasyMetadata({ data: "json, name=nextblockhash" })
  nextblockhash?: string;

  @SpeakeasyMetadata({ data: "json, name=nonce" })
  nonce?: number;

  @SpeakeasyMetadata({ data: "json, name=previousblockhash" })
  previousblockhash?: string;

  @SpeakeasyMetadata({ data: "json, name=reward" })
  reward?: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: number;

  @SpeakeasyMetadata({ data: "json, name=tx" })
  tx?: string[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
