import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubstanceComposition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=composition" })
  composition?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=feature" })
  feature?: Map<string, any>;
}
