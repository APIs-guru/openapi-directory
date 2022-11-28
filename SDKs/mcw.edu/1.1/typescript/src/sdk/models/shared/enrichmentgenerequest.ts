import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnrichmentGeneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accId" })
  accId?: string;

  @SpeakeasyMetadata({ data: "json, name=geneSymbols" })
  geneSymbols?: string[];

  @SpeakeasyMetadata({ data: "json, name=species" })
  species?: string;
}
