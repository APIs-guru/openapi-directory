import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErskineMayFootnote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: number;
}
