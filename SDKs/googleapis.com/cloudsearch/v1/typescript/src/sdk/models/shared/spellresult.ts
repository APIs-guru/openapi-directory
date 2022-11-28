import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SpellResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=suggestedQuery" })
  suggestedQuery?: string;
}
