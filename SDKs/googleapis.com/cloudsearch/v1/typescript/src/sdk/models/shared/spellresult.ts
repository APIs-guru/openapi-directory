import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SpellResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=suggestedQuery" })
  suggestedQuery?: string;
}
