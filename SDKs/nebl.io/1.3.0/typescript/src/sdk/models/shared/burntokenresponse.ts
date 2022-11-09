import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BurnTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=multisigOutputs" })
  multisigOutputs?: number[];

  @Metadata({ data: "json, name=ntp1OutputIndexes" })
  ntp1OutputIndexes?: number[];

  @Metadata({ data: "json, name=txHex" })
  txHex?: string;
}
