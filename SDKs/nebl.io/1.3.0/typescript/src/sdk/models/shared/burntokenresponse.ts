import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BurnTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=multisigOutputs" })
  multisigOutputs?: number[];

  @SpeakeasyMetadata({ data: "json, name=ntp1OutputIndexes" })
  ntp1OutputIndexes?: number[];

  @SpeakeasyMetadata({ data: "json, name=txHex" })
  txHex?: string;
}
