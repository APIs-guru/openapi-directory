import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnrichmentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=aspect" })
  aspect?: string;

  @Metadata({ data: "json, name=genes" })
  genes?: string[];

  @Metadata({ data: "json, name=species" })
  species?: string;
}
