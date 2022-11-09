import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BuilderConfig } from "./builderconfig";
import { Metadata } from "./metadata";
import { Recipe } from "./recipe";


export class InTotoProvenance extends SpeakeasyBase {
  @Metadata({ data: "json, name=builderConfig" })
  builderConfig?: BuilderConfig;

  @Metadata({ data: "json, name=materials" })
  materials?: string[];

  @Metadata({ data: "json, name=metadata" })
  metadata?: Metadata;

  @Metadata({ data: "json, name=recipe" })
  recipe?: Recipe;
}
