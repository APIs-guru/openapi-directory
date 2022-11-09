import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubstanceStudySummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=facet" })
  facet?: Map<string, any>;
}
