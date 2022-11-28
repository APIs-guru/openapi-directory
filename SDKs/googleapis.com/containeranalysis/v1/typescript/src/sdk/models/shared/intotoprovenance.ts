import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuilderConfig } from "./builderconfig";
import { Metadata } from "./metadata";
import { Recipe } from "./recipe";



export class InTotoProvenance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=builderConfig" })
  builderConfig?: BuilderConfig;

  @SpeakeasyMetadata({ data: "json, name=materials" })
  materials?: string[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Metadata;

  @SpeakeasyMetadata({ data: "json, name=recipe" })
  recipe?: Recipe;
}
