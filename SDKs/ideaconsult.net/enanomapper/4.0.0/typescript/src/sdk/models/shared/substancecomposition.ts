import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubstanceComposition extends SpeakeasyBase {
  @Metadata({ data: "json, name=composition" })
  composition?: Map<string, any>;

  @Metadata({ data: "json, name=feature" })
  feature?: Map<string, any>;
}
