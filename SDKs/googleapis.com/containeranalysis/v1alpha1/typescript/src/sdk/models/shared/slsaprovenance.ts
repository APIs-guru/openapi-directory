import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SlsaBuilder } from "./slsabuilder";
import { Material } from "./material";
import { SlsaMetadata } from "./slsametadata";
import { SlsaRecipe } from "./slsarecipe";



// SlsaProvenance
/** 
 * SlsaProvenance is the slsa provenance as defined by the slsa spec.
**/
export class SlsaProvenance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=builder" })
  builder?: SlsaBuilder;

  @SpeakeasyMetadata({ data: "json, name=materials", elemType: Material })
  materials?: Material[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: SlsaMetadata;

  @SpeakeasyMetadata({ data: "json, name=recipe" })
  recipe?: SlsaRecipe;
}
