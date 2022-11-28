import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubstanceStudy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=study" })
  study?: Map<string, any>;
}
