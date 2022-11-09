import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubstanceStudy extends SpeakeasyBase {
  @Metadata({ data: "json, name=study" })
  study?: Map<string, any>;
}
