import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TermXRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  key?: number;

  @SpeakeasyMetadata()
  termAcc?: string;

  @SpeakeasyMetadata()
  xrefDescription?: string;

  @SpeakeasyMetadata()
  xrefValue?: string;
}
