import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnrichmentGeneRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accId" })
  accId?: string;

  @Metadata({ data: "json, name=geneSymbols" })
  geneSymbols?: string[];

  @Metadata({ data: "json, name=species" })
  species?: string;
}
