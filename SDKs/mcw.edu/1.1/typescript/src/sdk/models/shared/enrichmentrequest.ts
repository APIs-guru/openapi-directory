import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnrichmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aspect" })
  aspect?: string;

  @SpeakeasyMetadata({ data: "json, name=genes" })
  genes?: string[];

  @SpeakeasyMetadata({ data: "json, name=species" })
  species?: string;
}
