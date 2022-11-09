import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SlsaBuilder } from "./slsabuilder";
import { Material } from "./material";
import { SlsaMetadata } from "./slsametadata";
import { SlsaRecipe } from "./slsarecipe";


// SlsaProvenance
/** 
 * SlsaProvenance is the slsa provenance as defined by the slsa spec.
**/
export class SlsaProvenance extends SpeakeasyBase {
  @Metadata({ data: "json, name=builder" })
  builder?: SlsaBuilder;

  @Metadata({ data: "json, name=materials", elemType: shared.Material })
  materials?: Material[];

  @Metadata({ data: "json, name=metadata" })
  metadata?: SlsaMetadata;

  @Metadata({ data: "json, name=recipe" })
  recipe?: SlsaRecipe;
}
